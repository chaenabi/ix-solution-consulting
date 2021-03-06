package ix.solution.consulting.config.security.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ix.solution.consulting.exception.common.BizException;
import ix.solution.consulting.exception.member.MemberCrudErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import java.beans.ConstructorProperties;
import java.nio.charset.StandardCharsets;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Base64;
import java.util.Date;
import java.util.regex.Pattern;

/**
 * token 생성 규칙에 따라 token 을 생성하며
 * 추후에 사용자가 가진 token 이 유효한지를 검증합니다.
 *
 * @author MC Lee
 * @created 2022-05-20
 * @since 0.0.1
 */
@Slf4j
@RequiredArgsConstructor
public class JwtUtil {
    private final String ISSUER = "IX_SOLUTION_CONSULTING";
    private static final Pattern isValidTokenFormat = Pattern.compile("(^[A-Za-z0-9-_]*\\.[A-Za-z0-9-_]*\\.[A-Za-z0-9-_]*$)");
    private ThreadLocal<String> memberName = null;

    public void setTokenCreationIngredient(String memberName) {
        ThreadLocal<String> threadLocal = new ThreadLocal<>();
        threadLocal.set(memberName);
        this.memberName = threadLocal;
    }

    /**
     * 회원의 고유 이름으로 액세스 토큰을 생성합니다.
     * 액세스 토큰의 페이로드에 비공개 클레임 memberName 가 포함됩니다.
     * 유효기간정책 : 1일
     *
     * @return 액세스토큰
     * @since 0.0.1
     */
    public String createAccessToken() {
        return JWT.create()
                .withIssuer(ISSUER)
                .withExpiresAt(Timestamp.valueOf(LocalDateTime.now().plusDays(1).atZone(ZoneId.of("Asia/Seoul")).toLocalDateTime()))
                .withClaim("memberName", memberName.get())
                .sign(Algorithm.HMAC256(memberName.get() + ISSUER));
    }

    /**
     * 회원의 고유 이름으로 리프레시 토큰을 생성합니다.
     * 유효기간정책 : 2주
     *
     *
     * @return 리프레시토큰
     * @since 0.0.1
     * @notUse
     */
    /*
    public String createRefreshToken() {
        return JWT.create()
                .withIssuer(ISSUER)
                .withExpiresAt(Timestamp.valueOf(LocalDateTime.now().plusWeeks(2).atZone(ZoneId.of("Asia/Seoul")).toLocalDateTime()))
                .withClaim("memberName", memberName.get())
                .sign(Algorithm.HMAC256(memberName.get()));
    }
     */

    /**
     * 액세스토큰의 페이로드를 해석하고 그 정보를 담는 용도로 사용되는 중첩 클래스.
     */
    @Getter
    @ToString
    private static class AccessTokenPayLoad {
        private final String iss;
        private final long exp;
        private final String memberName;

        @ConstructorProperties({ "iss", "exp", "memberName", "expire" })
        public AccessTokenPayLoad(String iss, long exp, String memberName) {
            this.iss = iss;
            this.exp = exp;
            this.memberName = memberName;
        }
    }

    /**
     * 유저가 전달한 액세스 토큰을 해석하고 충분한 클레임이 있는지 검증 후
     * 모든 페이로드 정보를 Payload 클래스에 담습니다.
     *
     * @param accessToken 유저가 전달한 액세스 토큰
     * @return 액세스 토큰의 페이로드에 존재하는 비공개 클레임 memberId의 값
     */
    public String decodePayload(String accessToken) {
        try {
            if (!isValidTokenFormat.matcher(accessToken).matches()) {
                log.error("정상적인 토큰이 아닙니다. 클라이언트가 변조된 토큰을 전달했을 가능성이 있습니다.");
                throw new BizException(MemberCrudErrorCode.ACCESS_TOKEN_INVALID);
            }
            Base64.Decoder decoder = Base64.getDecoder();
            String base64Payload = accessToken.split("\\.")[1];
            String decoded = new String(decoder.decode(base64Payload), StandardCharsets.UTF_8);
            ObjectMapper convertJsonStringToClass = new ObjectMapper();
            AccessTokenPayLoad payLoad = convertJsonStringToClass.readValue(decoded, AccessTokenPayLoad.class);

            return payLoad.getMemberName();

        } catch (JsonProcessingException e) {
            log.error(e.getMessage());
        }
        throw new InternalAuthenticationServiceException("액세스 토큰의 페이로드를 PayLoad 클래스에 매핑하는 도중 예기치 못한 문제가 발생했습니다. 페이로드가 변조되지 않았는지 확인하십시오.");
    }

    /**
     * 1. 액세스 토큰의 페이로드를 해석하여 비공개 클레임인 memberName 를 꺼내와 setTokenIngredient 을 수행합니다.
     *
     * if (액세스토큰이 유효하면)
     *   검사 결과: 유효한 토큰이므로 검증을 종료
     *
     * else if (액세스 토큰이 유효하지 않으면)
     *    리프레시 토큰 검증
     *
     * @param accessToken 유저가 전달한 액세스 토큰
     * //@param refreshToken 액세스 토큰이 만료되었을시 전달받게 되는 토큰.
     * //                    액세스 토큰이 만료상태가 아니라면 null 이 되어야 함.
     */
    public void verifyToken(String accessToken) {
        if (accessToken == null) throw new BizException(MemberCrudErrorCode.NOT_SIGNED);
        setTokenCreationIngredient(decodePayload(accessToken));
        /*
        if (!(validateAccessToken(accessToken))) {
            return verifyRefreshToken(refreshToken);
        }
         */
        validateAccessToken(accessToken);
    }

    /**
     * 회원이 서버로 특정 자원을 요청할때 함께 전달한
     * 액세스 토큰과 리프레시 토큰을 순차적으로 검증하는 메서드.
     *
     * @see JWTVerifier
     * JWTVerifier.verify는 토큰이 유효한 형식의 jwt인지를 검증 및
     * 발급자 일치성 및 해당 회원의 고유 id로 액세스 토큰이 생성된 것인지 검증합니다.
     *
     * if (검증 결과 불일치 사항 발생)
     *    유효하지 않은 토큰임을 알리는 예외처리 수행 (아무것도 반환하지 않음)
     *
     * else if (검증이 성공했으나 액세스 토큰의 유효기간이 지남)
     *    return false || 유저로부터 refresh token을 전달받지 못했다면 예외 발생
     *
     * else if (검증이 성공하고 액세스 토큰 유효기간도 만료되지 않음)
     *    return true
     *
     * @return 토큰 유효기간이 남아있음: true / 토큰 유효기간이 지남: false
     * @since 0.0.1
     */
    public void validateAccessToken(String accessToken) {
        if (ObjectUtils.isEmpty(memberName.get())) throw new BizException(MemberCrudErrorCode.NOT_SIGNED);

        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(memberName.get() + ISSUER))
                    .withClaim("memberName", memberName.get())
                    .withIssuer(ISSUER)
                    .build();
            verifier.verify(accessToken);
        } catch (TokenExpiredException expired) {
            log.error("액세스 토큰이 만료되었습니다. 재로그인이 요구됩니다.");
            throw new BizException(MemberCrudErrorCode.ACCESS_TOKEN_EXPIRED);
        } catch (JWTVerificationException failedVerification) {
            log.error("액세스 토큰 검증에 실패했습니다. 유효하지 않은 액세스 토큰입니다.");
            log.error("failedVerification: " + failedVerification.getMessage());
            throw new BizException(MemberCrudErrorCode.ACCESS_TOKEN_INVALID);
        }
    }

    /**
     * 1. 데이터베이스에 저장된 리프레시 토큰을 꺼내와
     *    유저가 전달한 액세스토큰 내에 있던
     *    페이로드의 memberId로 생성된 토큰과 일치한 것인지
     *
     * 2. 유저가 전달한 리프레시 토큰의 유효기간이 남아있는지
     *
     * 1과 2를 검증합니다.
     *
     * if (검증 결과 불일치 사항 발생)
     *   유효하지 않은 토큰 에러 메시지를 발생
     *
     * else if (검증이 성공했으나 리프레시 토큰의 유효기간이 지남)
     *   유저에게 재로그인을 요청하도록 알리고 특정 url 로 리다이렉트하도록 지시해야 함.
     *
     * else if (검증이 성공하고 리프레시 토큰 유효기간도 만료되지 않음)
     *   새로운 액세스 토큰을 생성 후 반환.
     *
     * @return 액세스 토큰
     * @since 0.0.1
     * @notuse
     */
    /*
    private String verifyRefreshToken(String refreshToken) {

        Member member = memberRepository.findById(Long.parseLong(memberId))
                .orElseThrow(() -> new BizException(MemberCrudErrorCode.MEMBER_NOT_FOUND));
        String savedRefreshToken = member.getRefreshToken();
        if (savedRefreshToken == null) throw new BizException(MemberCrudErrorCode.REFRESH_TOKEN_EXPIRED);

        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(memberName.get()))
                    .withIssuer(ISSUER)
                    .build();
            verifier.verify(savedRefreshToken);

        } catch (TokenExpiredException expired) {
            log.error("리프레시 토큰이 만료되었습니다. 재로그인이 요구됩니다.");
            throw new BizException(MemberCrudErrorCode.REFRESH_TOKEN_EXPIRED);
        } catch (JWTVerificationException failedVerification) {
            log.error("리프레시 토큰 검증에 실패했습니다. 유효하지 않은 리프레시 토큰입니다.");
            throw new BizException(MemberCrudErrorCode.REFRESH_TOKEN_INVALID);
        }

        if (savedRefreshToken.equals(refreshToken)) return createAccessToken();
        else {
            log.error("데이터베이스에 저장된 리프레시 토큰과 유저가 전달한 토큰 값이 서로 다릅니다.");
            throw new BizException(MemberCrudErrorCode.REFRESH_TOKEN_INVALID);
        }
    }
     */

}