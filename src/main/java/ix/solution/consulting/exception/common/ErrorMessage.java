package ix.solution.consulting.exception.common;

/**
 * 요청 처리 중 발생하는 에러의 상세 설명을 수록
 *
 * @author MC Lee
 * @created 2022-05-18
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
public class ErrorMessage {
    // board error
    public static final String BOARD_CRUD_FAIL = "게시물 관련 처리 요청이 실패했습니다.";
    public static final String POST_ID_IS_NULL = "게시물 번호가 반드시 전달되어야 합니다.";
    public static final String POST_TITLE_IS_NULL = "게시물 제목이 반드시 전달되어야 합니다.";
    public static final String POST_TITLE_IS_EMPTY = "게시물 제목이 비어 있으면 안됩니다.";
    public static final String POST_CONTENT_IS_NULL = "게시물 내용이 반드시 전달되어야 합니다.";
    public static final String POST_CONTENT_IS_EMPTY = "게시물 내용이 비어 있으면 안됩니다.";
    public static final String POST_NOT_FOUND = "해당 게시물이 존재하지 않습니다.";
    public static final String PAGE_NOT_FOUND = "해당 페이지가 존재하지 않습니다.";
    public static final String MISSING_POST_ID = "게시물을 수정하려면 게시물 번호를 함께 보내주셔야 합니다.";
    public static final String POST_MEDIA_NOT_CONTAINS = "첨부파일이 존재하지 않습니다.";
    public static final String FAIL_TO_DELETE_ATTACH_FILE = "첨부파일 삭제 중 오류가 발생했습니다.";
    // end of board error

    // member error
    public static final String MEMBER_CRUD_FAIL = "회원 관련 처리 요청이 실패했습니다.";
    public static final String MEMBER_ID_IS_NULL = "회원 아이디가 반드시 필요합니다.";
    public static final String MEMBER_ID_IS_EMPTY = "회원 아이디가 비어 있으면 안됩니다.";
    public static final String MEMBER_NAME_IS_NULL = "회원의 이름이 반드시 전달되어야 합니다.";
    public static final String MEMBER_PASSWORD_IS_NULL = "회원의 암호가 반드시 전달되어야 합니다.";
    public static final String MEMBER_NAME_IS_EMPTY = "회원의 이름이 비어 있으면 안됩니다.";
    public static final String MEMBER_PASSWORD_IS_EMPTY = "회원 암호가 비어 있으면 안됩니다.";
    public static final String MEMBER_PASSWORD_IS_INVALID = "비밀번호가 일치하지 않아 로그인이 실패했습니다.";
    public static final String MEMBER_NOT_FOUND = "해당 회원이 존재하지 않습니다.";
    public static final String MEMBER_NICKNAME_ALREADY_EXISTS = "이미 사용중인 회원 별명입니다.";

    public static final String MEMBER_NICKNAME_IS_NULL = "회원의 이름이 반드시 전달되어야 합니다.";
    public static final String MEMBER_NICKNAME_IS_EMPTY = "회원의 이름이 비어 있으면 안됩니다.";

    public static final String ACCESS_TOKEN_INVALID = "액세스 토큰 정보가 유효하지 않습니다";
    public static final String REFRESH_TOKEN_INVALID = "리프레시 토큰 정보가 유효하지 않습니다";
    public static final String ACCESS_TOKEN_EXPIRED = "액세스 토큰이 만료되었습니다";
    public static final String REFRESH_TOKEN_EXPIRED = "리프레시 토큰이 만료되었습니다.";
    public static final String NOT_SIGNED = "로그인되지 않은 유저로부터 요청이 들어왔습니다";
    // end of member error
}
