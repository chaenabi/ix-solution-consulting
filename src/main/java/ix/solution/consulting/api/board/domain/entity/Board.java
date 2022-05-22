package ix.solution.consulting.api.board.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import ix.solution.consulting.api.member.domain.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

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
    private Long id;

    private String postTitle;

    @Lob
    private String postContent;

    private String imagePath;
    private String videoPath;

    @Convert(converter = YNToBooleanConverter.class)
    private Boolean blocked;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "member_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ToString.Exclude
    private Member member;

    public void setMember(Member member) {
        this.member = member;
    }

    @Builder
    public Board(Long postId, String postTitle, String postContent, String imagePath, Member member) {
        this.id = postId;
        this.postTitle = postTitle;
        this.postContent = postContent;
        this.imagePath = imagePath;
        this.member = member;
        this.blocked = false;
    }

    public Board updatePost(Board wantToChange) {
        this.postTitle = wantToChange.getPostTitle();
        this.postContent = wantToChange.getPostContent();
        this.imagePath = wantToChange.getImagePath();
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
