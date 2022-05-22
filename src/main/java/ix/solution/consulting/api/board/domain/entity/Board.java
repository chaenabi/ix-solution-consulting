package ix.solution.consulting.api.board.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import ix.solution.consulting.api.board.comment.domain.entity.Comment;
import ix.solution.consulting.api.member.domain.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

/**
 * 게시물 엔티티
 *
 * @author MC Lee
 * @created 2022-05-22
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@Getter
@NoArgsConstructor
@Entity
@ToString
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long postId;

    private String postTitle;
    private String postContent;

    @Convert(converter = YNToBooleanConverter.class)
    private Boolean blocked;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "post")
    private List<Comment> comments;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "member_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ToString.Exclude
    private Member member;

    @Builder
    public Board(Long postId, String postTitle, String postContent, List<Comment> comments, Member author) {
        this.postId = postId;
        this.postTitle = postTitle;
        this.postContent = postContent;
        //this.attachFilesPath = attachFilesPath;
        this.member = author;
        this.comments = comments;
        this.blocked = false;
    }

    public Board updatePost(Board wantToChange) {
        this.postTitle = wantToChange.getPostTitle();
        this.postContent = wantToChange.getPostContent();
        return this;
    }

    private static class YNToBooleanConverter implements AttributeConverter<Boolean, String> {

        /**
         * Boolean 값을 Y 또는 N 으로 변환
         *
         * @param attribute boolean 값
         * @return String true 인 경우 Y 또는 false 인 경우 N
         */
        @Override
        public String convertToDatabaseColumn(Boolean attribute) {
            return (attribute != null && attribute) ? "Y" : "N";
        }

        /**
         * Y 또는 N 을 Boolean 으로 변환
         *
         * @param yn Y 또는 N
         * @return Boolean 대소문자 상관없이 Y 인 경우 true, N 인 경우 false
         */
        @Override
        public Boolean convertToEntityAttribute(String yn) {
            return "Y".equalsIgnoreCase(yn);
        }
    }
}
