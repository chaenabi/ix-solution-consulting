package ix.solution.consulting.api.board.controller;

import ix.solution.consulting.exception.board.InvalidBoardParameterException;
import ix.solution.consulting.exception.common.ErrorResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import static ix.solution.consulting.exception.common.controllerAdvice.GeneralControllerAdvice.handleValidParameterException;

/**
 * 공지사항과 관련된 작업 요청 중 발생하는 예외를 처리하는 컨트롤러 어드바이스
 *
 * @author MC Lee
 * @created 2022-05-18
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@RestControllerAdvice
public class BoardControllerAdvice {

    /**
     * # @Valid 또는 @Validated 애너테이션을 통한 검증 실패시 동작합니다.
     * # @Valid 또는 @Validated 애너테이션을 사용하는 컨트롤러 메서드에 대한 예외 응답 처리시
     * errors 인자값을 설정하면, 보다 자세한 에러메시지를 클라이언트에 전달할 수 있습니다.
     *
     * @param e InvalidParameterException
     * @return 400 (Bad Request: invalid parameter error)
     * @see ErrorResponseDTO
     */
    @ExceptionHandler(InvalidBoardParameterException.class)
    protected ResponseEntity<ErrorResponseDTO> handleInvalidPostParameterException(InvalidBoardParameterException e) {
        return handleValidParameterException(e.getHttpStatus(), e.getErrorCode(), e);
    }
}
