package ix.solution.consulting.api.board.domain.dto;

import ix.solution.consulting.api.board.domain.entity.Board;
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
        private final String image;

        public PostOne(Board board) {
            this.postId = board.getPostId();
            this.postTitle = board.getPostTitle();
            this.postContent = board.getPostContent();
            this.nickname = board.getMember().getNickname();
            this.image = board.getImage();
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
        private final String image;

        public PatchPost(Board board) {
            this.postTitle = board.getPostTitle();
            this.postContent = board.getPostContent();
            this.image = board.getImage();
        }
    }

}
