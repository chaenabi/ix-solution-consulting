package ix.solution.consulting.api.board.domain.dto;

import ix.solution.consulting.api.board.domain.entity.Board;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.beans.ConstructorProperties;

public class BoardRequestDTO {

    /**
     * 게시물 "저장" 시도시 클라이언트 측에서 전달한 값을 검증하고
     * 유효한 값을 저장하는 용도로 사용됩니다.
     *
     * @author MC Lee
     * @created 2022-05-22
     * @since 2.6.7 spring boot
     * @since 0.0.1 dev
     */
    @Getter
    public static class PostSaveRequest {

        @NotNull(message = "게시물 제목이 반드시 전달되어야 합니다.")
        @NotEmpty(message = "게시물 제목이 비어 있으면 안됩니다.")
        @Length(max = 30, message = "게시물 제목은 30 글자를 초과할 수 없습니다.")
        private final String postTitle;

        @NotNull(message = "게시물 내용이 반드시 전달되어야 합니다.")
        @NotEmpty(message = "게시물 내용이 비어 있으면 안됩니다.")
        @Length(max = 2000, message = "게시물 내용은 2000 글자를 초과할 수 없습니다.")
        private final String postContent;

        private final String image;

        @ConstructorProperties({"postTitle", "postContent", "image"})
        public PostSaveRequest(String postTitle, String postContent, String image) {
            this.postTitle = postTitle == null ? null : postTitle.trim();
            this.postContent = postContent == null ? null : postContent.trim();
            this.image = image;
        }

        public Board toEntity() {
            return Board.builder()
                    .postTitle(getPostTitle())
                    .postContent(getPostContent())
                    .image(getImage())
                    .build();

        }
    }

    /**
     * 게시물 "수정" 시도시 클라이언트 측에서 전달한 값을 검증하고
     * 유효한 값을 저장하는 용도로 사용됩니다.
     *
     * @author MC Lee
     * @created 2022-05-22
     * @since 2.6.7 spring boot
     * @since 0.0.1 dev
     */
    @Getter
    public static class PostPatchRequest {

        @NotNull(message = "게시물을 수정하려면 게시물 번호를 함께 보내주셔야 합니다.")
        private final Long postId;

        @NotNull(message = "게시물 제목이 반드시 전달되어야 합니다.")
        @NotEmpty(message = "게시물 제목이 비어 있으면 안됩니다.")
        @Length(max = 30, message = "게시물 제목은 30 글자를 초과할 수 없습니다.")
        private final String postTitle;

        @NotNull(message = "게시물 내용이 반드시 전달되어야 합니다.")
        @NotEmpty(message = "게시물 내용이 비어 있으면 안됩니다.")
        @Length(max = 2000, message = "게시물 내용은 2000 글자를 초과할 수 없습니다.")
        private final String postContent;

        private final String image;

        @ConstructorProperties({ "postId", "postTitle", "postContent", "image"})
        public PostPatchRequest(Long postId, String postTitle, String postContent, String image) {
            this.postId = postId;
            this.postTitle = postTitle == null ? null : postTitle.trim();
            this.postContent = postContent == null ? null : postContent.trim();
            this.image = image;
        }

        public Board toEntity() {
            return Board.builder()
                    .postId(getPostId())
                    .postTitle(getPostTitle())
                    .postContent(getPostContent())
                    .image(getImage())
                    .build();
        }
    }



}
