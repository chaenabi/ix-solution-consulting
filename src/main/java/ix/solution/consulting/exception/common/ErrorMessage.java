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
    public static final String BOARD_ID_IS_NULL = "게시물 번호가 반드시 전달되어야 합니다.";
    public static final String BOARD_TITLE_IS_NULL = "게시물 제목이 반드시 전달되어야 합니다.";
    public static final String BOARD_TITLE_IS_EMPTY = "게시물 제목이 비어 있으면 안됩니다.";
    public static final String BOARD_CONTENT_IS_NULL = "게시물 내용이 반드시 전달되어야 합니다.";
    public static final String BOARD_CONTENT_IS_EMPTY = "게시물 내용이 비어 있으면 안됩니다.";
    public static final String BOARD_NOT_FOUND = "해당 게시물이 존재하지 않습니다.";
    // end of board error

    // member error
    public static final String MEMBER_CRUD_FAIL = "회원 관련 처리 요청이 실패했습니다.";
    public static final String MEMBER_NAME_IS_NULL = "회원의 이름이 반드시 전달되어야 합니다.";
    public static final String MEMBER_PASSWORD_IS_NULL = "회원의 암호가 반드시 전달되어야 합니다.";
    public static final String MEMBER_NAME_IS_EMPTY = "회원의 이름이 비어 있으면 안됩니다.";
    public static final String MEMBER_PASSWORD_IS_EMPTY = "회원 암호가 비어 있으면 안됩니다.";
    public static final String MEMBER_NOT_FOUND = "해당 회원이 존재하지 않습니다.";
    // end of member error
}
