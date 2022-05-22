package ix.solution.consulting.api.board.domain.dto;

import ix.solution.consulting.api.board.domain.entity.Board;
import ix.solution.consulting.api.board.domain.entity.PostAttachFile;
import ix.solution.consulting.api.member.domain.entity.Member;
import ix.solution.consulting.exception.common.ErrorMessage;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
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

        @NotNull(message = ErrorMessage.POST_TITLE_IS_NULL)
        @NotEmpty(message = ErrorMessage.POST_TITLE_IS_EMPTY)
        //@Length(max = 30, message = "게시물 제목은 30 글자를 초과할 수 없습니다.")
        private final String postTitle;

        @NotNull(message = ErrorMessage.POST_CONTENT_IS_NULL)
        @NotEmpty(message = ErrorMessage.POST_CONTENT_IS_EMPTY)
        //@Length(max = 2000, message = "게시물 내용은 2000 글자를 초과할 수 없습니다.")
        private final String postContent;

        @NotNull(message = ErrorMessage.MEMBER_ID_IS_NULL)
        private final Long memberId;

        private final String imagePath;

        @ConstructorProperties({"postTitle", "postContent", "image"})
        public PostSaveRequest(String postTitle, String postContent, Long memberId, String imagePath) {
            this.postTitle = postTitle == null ? null : postTitle.trim();
            this.postContent = postContent;
            this.memberId = memberId;
            this.imagePath = imagePath;
        }

        public Board toEntity(Member member) {
            return Board.builder()
                    .postTitle(getPostTitle())
                    .postContent(getPostContent())
                    .member(member)
                    .imagePath(getImagePath())
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
    public static class UpdatePostRequest {

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

        private final String imagePath;

        @ConstructorProperties({"postId", "postTitle", "postContent", "image"})
        public UpdatePostRequest(Long postId, String postTitle, String postContent, String imagePath) {
            this.postId = postId;
            this.postTitle = postTitle == null ? null : postTitle.trim();
            this.postContent = postContent == null ? null : postContent.trim();
            this.imagePath = imagePath;
        }

        public Board toEntity() {
            return Board.builder()
                    .postId(getPostId())
                    .postTitle(getPostTitle())
                    .postContent(getPostContent())
                    .imagePath(getImagePath())
                    .build();
        }
    }

    /**
     * 게시물 첨부파일 DTO
     *
     * @author MC Lee
     * @created 2022-05-22
     * @since 2.6.7 spring boot
     * @since 0.0.1 dev
     */
    @Getter
    @Builder
    @RequiredArgsConstructor
    public static class PostAttachFileDTO {
        private final Long id;
        private final String filename;
        private final Board post;

        public PostAttachFile toEntity() {
            return PostAttachFile.builder()
                    .post(getPost())
                    .filename(getFilename())
                    .build();
        }
    }

}
