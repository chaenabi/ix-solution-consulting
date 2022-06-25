package ix.solution.consulting.api.board.domain.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import ix.solution.consulting.api.board.comment.domain.entity.Comment;
import ix.solution.consulting.api.board.domain.entity.Board;
import ix.solution.consulting.api.board.domain.enums.AttachFileMediaType;
import ix.solution.consulting.api.member.domain.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
import java.util.List;

public class BoardResponseDTO {

    @Getter
    @RequiredArgsConstructor
    public static class PostOne {
        private final Long postId;
        private final String postTitle;
        private final String postContent;
        private final String categoryName;
        private final Member author;
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd a hh:mm")
        private final LocalDateTime createAt;
        private final Long sawCount;
        private final List<Comment> comments;
        private final int commentSize;

        public PostOne(Board board) {
            this.postId = board.getPostId();
            this.postTitle = board.getPostTitle();
            this.postContent = board.getPostContent();
            this.categoryName = board.getCategoryName();
            this.author = board.getMember();
            this.comments = board.getComments();
            this.createAt = board.getCreateAt();
            this.commentSize = board.getComments().size();
            this.sawCount = board.getSawCount();
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
        private final String categoryName;

        public PatchPost(Board board) {
            this.postTitle = board.getPostTitle();
            this.postContent = board.getPostContent();
            this.categoryName = board.getCategoryName();
        }
    }
}
