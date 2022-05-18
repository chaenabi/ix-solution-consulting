package ix.solution.consulting.exception.board;

import ix.solution.consulting.exception.common.ErrorCode;
import ix.solution.consulting.exception.common.ErrorMessage;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.Arrays;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NOT_FOUND;

/**
 * 게시물 처리 중 발생하는 에러 목록을 열거형으로 관리하여 가독성 향상
 *
 * @author MC Lee
 * @created 2022-05-18
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@Getter
@RequiredArgsConstructor
public enum BoardCrudErrorCode implements ErrorCode {

    BOARD_CRUD_FAIL(BAD_REQUEST, -999, ErrorMessage.BOARD_CRUD_FAIL),
    BOARD_ID_IS_NULL(BAD_REQUEST, -1, ErrorMessage.BOARD_ID_IS_NULL),
    BOARD_TITLE_IS_NULL(BAD_REQUEST, -2, ErrorMessage.BOARD_TITLE_IS_NULL),
    BOARD_TITLE_IS_EMPTY(BAD_REQUEST, -3, ErrorMessage.BOARD_TITLE_IS_EMPTY),
    BOARD_CONTENT_IS_NULL(BAD_REQUEST, -4, ErrorMessage.BOARD_CONTENT_IS_NULL),
    BOARD_CONTENT_IS_EMPTY(BAD_REQUEST, -5, ErrorMessage.BOARD_CONTENT_IS_EMPTY),
    BOARD_NOT_FOUND(NOT_FOUND, -6, ErrorMessage.BOARD_NOT_FOUND);

    private final HttpStatus httpStatus;
    private final Integer bizCode;
    private final String msg;

    public Integer findMatchBizCode(final String failMessage) {
        return Arrays.stream(BoardCrudErrorCode.values())
                .filter(errorCode -> (errorCode.msg).equals(failMessage))
                .map(BoardCrudErrorCode::getBizCode)
                .findAny()
                .orElse(-999);
    }
}
