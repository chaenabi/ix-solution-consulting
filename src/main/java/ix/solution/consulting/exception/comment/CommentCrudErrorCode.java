package ix.solution.consulting.exception.comment;

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
public enum CommentCrudErrorCode implements ErrorCode {

    COMMENT_CRUD_FAIL(BAD_REQUEST, -999, ErrorMessage.COMMENT_CRUD_FAIL),
    COMMENT_ID_IS_NULL(BAD_REQUEST, -1, ErrorMessage.COMMENT_ID_IS_NULL),
    COMMENT_ID_IS_EMPTY(BAD_REQUEST, -2, ErrorMessage.COMMENT_ID_IS_EMPTY),
    COMMENT_CONTENT_IS_NULL(BAD_REQUEST, -3, ErrorMessage.COMMENT_CONTENT_IS_NULL),
    COMMENT_CONTENT_IS_EMPTY(BAD_REQUEST, -4, ErrorMessage.COMMENT_CONTENT_IS_EMPTY),
    COMMENT_WRITER_IS_NULL(BAD_REQUEST, -5, ErrorMessage.COMMENT_WRITER_IS_NULL),
    COMMENT_WRITER_IS_EMPTY(BAD_REQUEST, -6, ErrorMessage.COMMENT_WRITER_IS_EMPTY),
    COMMENT_PASSWORD_IS_NULL(BAD_REQUEST, -7, ErrorMessage.COMMENT_PASSWORD_IS_NULL),
    COMMENT_PASSWORD_IS_EMPTY(BAD_REQUEST, -8, ErrorMessage.COMMENT_PASSWORD_IS_EMPTY),
    COMMENT_NOT_FOUND(NOT_FOUND, -9, ErrorMessage.COMMENT_NOT_FOUND),
    COMMENT_PASSWORD_NOT_MATCH(UNAUTHORIZED, -10, ErrorMessage.COMMENT_PASSWORD_NOT_MATCH),
    FAIL_TO_DELETE_COMMENT(INTERNAL_SERVER_ERROR, -10, ErrorMessage.FAIL_TO_DELETE_COMMENT);

    private final HttpStatus httpStatus;
    private final Integer bizCode;
    private final String msg;

    public Integer findMatchBizCode(final String failMessage) {
        return Arrays.stream(CommentCrudErrorCode.values())
                .filter(errorCode -> (errorCode.msg).equals(failMessage))
                .map(CommentCrudErrorCode::getBizCode)
                .findAny()
                .orElse(-999);
    }
}
