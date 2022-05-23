package ix.solution.consulting.config.security.provider;

import ix.solution.consulting.config.security.tokens.JwtAuthenticationToken;
import ix.solution.consulting.config.security.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtAuthenticationProvider implements AuthenticationProvider {

    // use CustomUserDetailsService
    private final UserDetailsService userDetailsService;

    /**
     * @param authentication 인증에 필요한 jwt 정보가 담겨 있습니다.
     * @return 인증 성공 후, 인가 처리에 사용할 수 있는 객체 반환
     * @throws AuthenticationException 인증처리 실패
     */
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        JwtUtil jwtUtil = new JwtUtil();
        JwtAuthenticationToken token = (JwtAuthenticationToken) authentication;
        // 인증
        jwtUtil.verifyToken(token.getJsonWebToken());

        String nickname = jwtUtil.decodePayload(String.valueOf(token.getJsonWebToken()));
        UserDetails userDetails = userDetailsService.loadUserByUsername(nickname);

        return new JwtAuthenticationToken(nickname, null, userDetails.getAuthorities());
    }

    /**
     * @param authentication 이 파라매터와 JwtAuthenticationToken 가 사용하고자 하는 토큰의 타입이 일치할 때 Provider 가 인증처리를 할 수 있도록 설정
     * @return 인증 처리 가능 여부
     */
    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.isAssignableFrom(JwtAuthenticationToken.class);
    }
}