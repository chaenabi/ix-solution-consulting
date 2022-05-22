package ix.solution.consulting.exception.comment;

import ix.solution.consulting.exception.common.ErrorCode;
import ix.solution.consulting.exception.common.InvalidParameterException;
import org.springframework.validation.Errors;

/**
 * 공지사항 컨트롤러에 전달된 파라매터를 검증 후 발생한 에러를 처리하는 예외 클래스
 *
 * @author MC Lee
 * @created 2022-05-18
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
public class InvalidCommentParameterException extends InvalidParameterException {
    public InvalidCommentParameterException(Errors errors, ErrorCode errorCode) {
        super(errors, errorCode);
    }
}
