package ix.solution.consulting.api.board.domain.dto;

import ix.solution.consulting.api.board.domain.entity.Board;
import ix.solution.consulting.api.board.domain.entity.PostAttachFile;
import ix.solution.consulting.api.board.domain.enums.AttachFileMediaType;
import ix.solution.consulting.api.member.domain.entity.Member;
import ix.solution.consulting.exception.common.ErrorMessage;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.beans.ConstructorProperties;
import java.util.List;

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

        @NotNull(message = ErrorMessage.POST_CATEGORY_NAME_IS_NULL)
        @NotEmpty(message = ErrorMessage.POST_CATEGORY_NAME_IS_EMPTY)
        private final String categoryName;

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

        private final List<PostAttachFileDTO> attachFiles;

        @ConstructorProperties({"categoryName", "postTitle", "postContent", "memberId", "attachFiles"})
        public PostSaveRequest(String categoryName, String postTitle, String postContent, Long memberId, List<PostAttachFileDTO> attachFiles) {
            this.categoryName = categoryName == null ? null : categoryName.trim();
            this.postTitle = postTitle == null ? null : postTitle.trim();
            this.postContent = postContent== null ? null : postContent.trim();
            this.memberId = memberId;
            this.attachFiles = attachFiles;
        }

        public Board toEntity(Member author) {
            return Board.builder()
                    .categoryName(categoryName)
                    .postTitle(postTitle)
                    .postContent(postContent)
                    .author(author)
                    .sawCount(0L)
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
    public static class UpdatePost {

        @NotNull(message = ErrorMessage.POST_CATEGORY_NAME_IS_NULL)
        @NotEmpty(message = ErrorMessage.POST_CATEGORY_NAME_IS_EMPTY)
        private final String categoryName;

        @NotNull(message = ErrorMessage.MISSING_POST_ID)
        private final Long postId;

        @NotNull(message = ErrorMessage.MEMBER_ID_IS_NULL)
        private final Long memberId;

        @NotNull(message = ErrorMessage.POST_TITLE_IS_NULL)
        @NotEmpty(message = ErrorMessage.POST_TITLE_IS_EMPTY)
        //@Length(max = 30, message = "게시물 제목은 30 글자를 초과할 수 없습니다.")
        private final String postTitle;

        @NotNull(message = ErrorMessage.POST_CONTENT_IS_NULL)
        @NotEmpty(message = ErrorMessage.POST_CONTENT_IS_EMPTY)
        //@Length(max = 2000, message = "게시물 내용은 2000 글자를 초과할 수없습니다.")
        private final String postContent;

        @ConstructorProperties({"postId", "memberId", "categoryName", "postTitle", "postContent"})
        public UpdatePost(Long postId, Long memberId, String categoryName, String postTitle, String postContent) {
            this.postId = postId;
            this.memberId = memberId;
            this.categoryName = categoryName == null ? null : categoryName.trim();
            this.postTitle = postTitle == null ? null : postTitle.trim();
            this.postContent = postContent == null ? null : postContent.trim();
        }

        public Board toEntity() {
            return Board.builder()
                    .postId(postId)
                    .postTitle(postTitle)
                    .postContent(postContent)
                    .categoryName(categoryName)
                    .build();
        }
    }

    @Getter
    public static class RemovePost {
        @NotNull(message = ErrorMessage.POST_ID_IS_NULL)
        private final Long postId;

        @NotNull(message = ErrorMessage.MEMBER_ID_IS_NULL)
        private final Long memberId;

        private final List<String> attachFilenames;

        @ConstructorProperties({"postId", "memberId", "attachFilenames"})
        public RemovePost(Long postId, Long memberId, List<String> attachFilenames) {
            this.postId = postId;
            this.memberId = memberId;
            this.attachFilenames = attachFilenames;
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
        private final String originalFilename;
        private final String filepath;
        private final String filename;
        private final AttachFileMediaType fileType;

        public PostAttachFile toEntity() {
            return PostAttachFile.builder()
                    .originalFilename(originalFilename)
                    .filepath(filepath)
                    .filename(filename)
                    .fileType(fileType)
                    .build();
        }

        public BoardResponseDTO.UploadPostAttachFile toResponseDTO() {
            return BoardResponseDTO.UploadPostAttachFile.builder()
                    .originalFilename(originalFilename)
                    .filepath(filepath)
                    .filename(filename)
                    .fileType(fileType)
                    .build();
        }
    }
}
