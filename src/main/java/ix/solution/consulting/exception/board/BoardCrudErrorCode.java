package ix.solution.consulting.exception.board;

import ix.solution.consulting.exception.common.ErrorCode;
import ix.solution.consulting.exception.common.ErrorMessage;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.Arrays;

import static org.springframework.http.HttpStatus.*;

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
    POST_ID_IS_NULL(BAD_REQUEST, -1, ErrorMessage.POST_ID_IS_NULL),
    POST_TITLE_IS_NULL(BAD_REQUEST, -2, ErrorMessage.POST_TITLE_IS_NULL),
    POST_TITLE_IS_EMPTY(BAD_REQUEST, -3, ErrorMessage.POST_TITLE_IS_EMPTY),
    POST_CONTENT_IS_NULL(BAD_REQUEST, -4, ErrorMessage.POST_CONTENT_IS_NULL),
    POST_CONTENT_IS_EMPTY(BAD_REQUEST, -5, ErrorMessage.POST_CONTENT_IS_EMPTY),
    PAGE_NOT_FOUND(NOT_FOUND, -6, ErrorMessage.PAGE_NOT_FOUND),
    POST_NOT_FOUND(NOT_FOUND, -7, ErrorMessage.POST_NOT_FOUND),
    MISSING_POST_ID(BAD_REQUEST, -8, ErrorMessage.MISSING_POST_ID),
    POST_MEDIA_NOT_CONTAINS(NOT_FOUND, -9, ErrorMessage.POST_MEDIA_NOT_CONTAINS),
    FAIL_TO_DELETE_ATTACH_FILE(INTERNAL_SERVER_ERROR, -10, ErrorMessage.FAIL_TO_DELETE_ATTACH_FILE);

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
