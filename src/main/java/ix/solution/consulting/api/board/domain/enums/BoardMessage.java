package ix.solution.consulting.api.board.domain.enums;

import ix.solution.consulting.api.common.SuccessMessage;
import lombok.Getter;

@Getter
public enum BoardMessage implements SuccessMessage {
    SAVE_POST_SUCCESS("게시물이 잘 저장되었습니다."),
    FIND_POST_ONE_SUCCESS("게시물이 잘 조회되었습니다."),
    FIND_POST_PAGE_SUCCESS("게시물 목록이 잘 조회되었습니다."),
    UPDATE_POST_SUCCESS("게시물이 수정되었습니다."),
    DELETE_POST_SUCCESS("게시물이 삭제되었습니다."),
    SAVE_ATTACH_FILE_SUCCESS("첨부파일이 성공적으로 저장되었습니다."),
    REMOVE_ATTACH_FILE_SUCCESS("첨부파일을 성공적으로 삭제했습니다.");

    private final String successMsg;

    BoardMessage(String successMsg) {
        this.successMsg = successMsg;
    }
}
