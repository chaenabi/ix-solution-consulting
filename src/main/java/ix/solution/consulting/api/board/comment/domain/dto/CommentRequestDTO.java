package ix.solution.consulting.api.board.comment.domain.dto;

import ix.solution.consulting.api.board.comment.domain.entity.Comment;
import ix.solution.consulting.api.board.domain.entity.Board;
import ix.solution.consulting.exception.common.ErrorMessage;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class CommentRequestDTO {

    @Getter
    @RequiredArgsConstructor
    public static class AddComment {

        @NotNull(message = ErrorMessage.POST_ID_IS_NULL)
        private final Long postId;

        @NotNull(message = ErrorMessage.COMMENT_CONTENT_IS_NULL)
        @NotEmpty(message = ErrorMessage.COMMENT_CONTENT_IS_EMPTY)
        private final String content;

        @NotNull(message = ErrorMessage.COMMENT_WRITER_IS_NULL)
        @NotEmpty(message = ErrorMessage.COMMENT_WRITER_IS_EMPTY)
        private final String writer;

        @NotNull(message = ErrorMessage.COMMENT_PASSWORD_IS_NULL)
        @NotEmpty(message = ErrorMessage.COMMENT_PASSWORD_IS_EMPTY)
        private String password;

        public void encodePassword(String password) {
            this.password = password;
        }

        public Comment toEntity(Board post) {
            return Comment.builder()
                    .writer(writer)
                    .content(content)
                    .password(password)
                    .post(post)
                    .build();
        }
    }

    @Getter
    @RequiredArgsConstructor
    public static class UpdateComment {

        @NotNull(message = ErrorMessage.COMMENT_ID_IS_NULL)
        private final Long commentId;

        @NotNull(message = ErrorMessage.COMMENT_CONTENT_IS_NULL)
        @NotEmpty(message = ErrorMessage.COMMENT_CONTENT_IS_EMPTY)
        private final String content;

        @NotNull(message = ErrorMessage.COMMENT_PASSWORD_IS_NULL)
        @NotEmpty(message = ErrorMessage.COMMENT_PASSWORD_IS_EMPTY)
        private final String password;

    }

    @Getter
    @RequiredArgsConstructor
    public static class RemoveComment {

        @NotNull(message = ErrorMessage.COMMENT_ID_IS_NULL)
        private final Long commentId;

        @NotNull(message = ErrorMessage.COMMENT_PASSWORD_IS_NULL)
        @NotEmpty(message = ErrorMessage.COMMENT_PASSWORD_IS_EMPTY)
        private final String password;
    }
}
