package ix.solution.consulting.api.board.comment.domain.enums;

import ix.solution.consulting.api.common.SuccessMessage;
import lombok.Getter;

@Getter
public enum CommentMessage implements SuccessMessage {
    SAVE_COMMENT_SUCCESS("댓글이 성공적으로 등록되었습니다."),
    UPDATE_COMMENT_SUCCESS("댓글이 수정되었습니다."),
    DELETE_COMMENT_SUCCESS("댓글이 삭제되었습니다.");

    private final String successMsg;

    CommentMessage(String successMsg) {
        this.successMsg = successMsg;
    }
}
