package ix.solution.consulting.exception.member;

import ix.solution.consulting.exception.common.ErrorCode;
import ix.solution.consulting.exception.common.ErrorMessage;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.Arrays;

import static org.springframework.http.HttpStatus.*;

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

    MEMBER_CRUD_FAIL(BAD_REQUEST, -999, ErrorMessage.MEMBER_CRUD_FAIL),
    MEMBER_ID_IS_NULL(BAD_REQUEST, -1, ErrorMessage.MEMBER_ID_IS_NULL),
    MEMBER_ID_IS_EMPTY(BAD_REQUEST, -2, ErrorMessage.MEMBER_ID_IS_EMPTY),
    MEMBER_NAME_IS_NULL(BAD_REQUEST, -3, ErrorMessage.MEMBER_NAME_IS_NULL),
    MEMBER_NAME_IS_EMPTY(BAD_REQUEST, -4, ErrorMessage.MEMBER_NAME_IS_EMPTY),
    MEMBER_NICKNAME_IS_NULL(BAD_REQUEST, -5, ErrorMessage.MEMBER_NICKNAME_IS_NULL),
    MEMBER_NICKNAME_IS_EMPTY(BAD_REQUEST, -6, ErrorMessage.MEMBER_NICKNAME_IS_EMPTY),
    MEMBER_PASSWORD_IS_NULL(BAD_REQUEST, -7, ErrorMessage.MEMBER_PASSWORD_IS_NULL),
    MEMBER_PASSWORD_IS_EMPTY(BAD_REQUEST, -8, ErrorMessage.MEMBER_PASSWORD_IS_EMPTY),
    MEMBER_PASSWORD_IS_INVALID(UNAUTHORIZED, -9, ErrorMessage.MEMBER_PASSWORD_IS_INVALID),
    MEMBER_NOT_FOUND(NOT_FOUND, -10, ErrorMessage.MEMBER_NOT_FOUND),
    MEMBER_NICKNAME_ALREADY_EXISTS(CONFLICT, -11, ErrorMessage.MEMBER_NICKNAME_ALREADY_EXISTS),
    ACCESS_TOKEN_INVALID(UNAUTHORIZED, -12, ErrorMessage.ACCESS_TOKEN_INVALID),
    REFRESH_TOKEN_INVALID(UNAUTHORIZED, -13, ErrorMessage.REFRESH_TOKEN_INVALID),
    ACCESS_TOKEN_EXPIRED(UNAUTHORIZED, -14, ErrorMessage.ACCESS_TOKEN_EXPIRED),
    REFRESH_TOKEN_EXPIRED(UNAUTHORIZED, -15, ErrorMessage.REFRESH_TOKEN_EXPIRED),
    NOT_SIGNED(UNAUTHORIZED, -16, ErrorMessage.NOT_SIGNED);

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
