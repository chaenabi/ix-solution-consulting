package ix.solution.consulting.exception.member;

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
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@Getter
@RequiredArgsConstructor
public enum MemberCrudErrorCode implements ErrorCode {

    MEMBER_CRUD_FAIL(BAD_REQUEST, -999, "회원 관련 처리 요청이 실패했습니다."),
    MEMBER_NAME_IS_NULL(BAD_REQUEST, -1, "회원의 이름이 반드시 전달되어야 합니다."),
    MEMBER_PASSWORD_IS_NULL(BAD_REQUEST, -2, "회원의 암호가 반드시 전달되어야 합니다."),
    MEMBER_NAME_IS_EMPTY(BAD_REQUEST, -3, "회원의 이름이 비어 있으면 안됩니다."),
    MEMBER_PASSWORD_IS_EMPTY(BAD_REQUEST, -4, "회원 암호가 비어 있으면 안됩니다."),
    MEMBER_NOT_FOUND(NOT_FOUND, -5, "해당 회원이 존재하지 않습니다.");

    private final HttpStatus httpStatus;
    private final Integer bizCode;
    private final String msg;

    public Integer findMatchBizCode(final String failMessage) {
        return Arrays.stream(MemberCrudErrorCode.values())
                .filter(errorCode -> (errorCode.msg).equals(failMessage))
                .map(MemberCrudErrorCode::getBizCode)
                .findAny()
                .orElse(-999);
    }
}
