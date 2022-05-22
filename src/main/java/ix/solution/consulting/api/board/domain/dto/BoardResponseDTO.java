package ix.solution.consulting.api.board.domain.dto;

import ix.solution.consulting.api.board.domain.entity.Board;
import ix.solution.consulting.api.board.domain.entity.PostAttachFile;
import ix.solution.consulting.api.board.domain.enums.AttachFileMediaType;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.List;

public class BoardResponseDTO {

    @Getter
    @RequiredArgsConstructor
    public static class PostOne {
        private final Long postId;
        private final String postTitle;
        private final String postContent;
        private final String nickname;
        private final List<PostAttachFile> imagePath;

        public PostOne(Board board) {
            this.postId = board.getPostId();
            this.postTitle = board.getPostTitle();
            this.postContent = board.getPostContent();
            this.nickname = board.getMember().getNickname();
            this.imagePath = board.getAttachFilesPath();
        }
    }

    @Getter
    public static class PageResponse {

        private final int selectedPageNumber;
        private final List<Board> selectedPosts;
        private final int totalPages;

        public PageResponse(int selectedPageNumber, Page<Board> selectedPosts) {
            this.selectedPageNumber = (int) Math.ceil((selectedPageNumber + 1) / 10.0);
            this.selectedPosts = selectedPosts.getContent();
            this.totalPages = selectedPosts.getTotalPages();
        }
    }

    @Getter
    @RequiredArgsConstructor
    public static class PatchPost {
        private final String postTitle;
        private final String postContent;

        public PatchPost(Board board) {
            this.postTitle = board.getPostTitle();
            this.postContent = board.getPostContent();
        }
    }

    @Getter
    @Builder
    @RequiredArgsConstructor
    public static class UploadPostAttachFile {
        private final String originalFilename;
        private final String filepath;
        private final String filename;
        private final AttachFileMediaType fileType;
    }

}
