package ix.solution.consulting.exception.notice;

import ix.solution.consulting.exception.common.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.Arrays;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NOT_FOUND;

/**
 * 공지사항 처리 중 발생하는 에러 목록을 열거형으로 관리하여 가독성 향상
 *
 * @author MC Lee
 * @created 2022-05-18
 * @since 2.6.3 spring boot
 * @since 0.0.1 dev
 */
@Getter
@RequiredArgsConstructor
public enum NoticeCrudErrorCode implements ErrorCode {

    NOTICE_CRUD_FAIL(BAD_REQUEST, -999, "게시물 관련 처리 요청이 실패했습니다."),
    NOTICE_ID_IS_NULL(BAD_REQUEST, -2, "게시물 번호가 반드시 전달되어야 합니다."),
    NOTICE_TITLE_IS_NULL(BAD_REQUEST, -3, "게시물 제목이 반드시 전달되어야 합니다."),
    NOTICE_TITLE_IS_EMPTY(BAD_REQUEST, -4, "게시물 제목이 비어 있으면 안됩니다."),
    NOTICE_CONTENT_IS_NULL(BAD_REQUEST, -5, "게시물 내용이 반드시 전달되어야 합니다."),
    NOTICE_CONTENT_IS_EMPTY(BAD_REQUEST, -6, "게시물 내용이 비어 있으면 안됩니다."),
    NOTICE_NOT_FOUND(NOT_FOUND, -7, "해당 게시물이 존재하지 않습니다.");

    private final HttpStatus httpStatus;
    private final Integer bizCode;
    private final String msg;

    public Integer findMatchBizCode(final String failMessage) {
        return Arrays.stream(NoticeCrudErrorCode.values())
                .filter(errorCode -> (errorCode.msg).equals(failMessage))
                .map(NoticeCrudErrorCode::getBizCode)
                .findAny()
                .orElse(-9999);
    }
}
