package ix.solution.consulting.config.security.filter;

import ix.solution.consulting.config.security.tokens.JwtAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_PREFIX = "Bearer ";

    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String jwt = resolveToken(request);

        if (StringUtils.hasText(jwt)) {
            try {
                Authentication jwtAuthenticationToken = new JwtAuthenticationToken(jwt);
                Authentication authentication = authenticationManager.authenticate(jwtAuthenticationToken);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            } catch (AuthenticationException authenticationException) {
                SecurityContextHolder.clearContext();
            }
        }

        filterChain.doFilter(request, response);
    }

    /**
     * 토큰 문자열 분리
     *
     * @param request 요청 객체
     * @return "Bearer "가 제거된
     */
    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_PREFIX)) {
            return bearerToken.substring(7);
        }
        return null;
    }


//    /**
//     * ControllerAdvice 가 필터의 에러를 처리해주지 못하기 때문에,
//     * 따로 구현됩니다. 해당 메서드는 timestamp 를 출력하지 않습니다.
//     *
//     * @param status HttpStatus
//     * @param response HttpServletResponse
//     * @param e BizException
//     * @notuse
//     */
//
//    private void sendErrorResponse(HttpStatus status, HttpServletResponse response, BizException e) throws IOException {
//        response.setStatus(status.value());
//        response.setContentType("application/json");
//        response.setCharacterEncoding("UTF-8");
//        ErrorResponseDTO responseDTO = ErrorResponseDTO.builder()
//                .offDisplayTimeStamp()
//                .errorCode(status.value())
//                .message(e.getMessage())
//                .build();
//        response.getWriter().write(responseDTO.toString());
//    }
//
}









