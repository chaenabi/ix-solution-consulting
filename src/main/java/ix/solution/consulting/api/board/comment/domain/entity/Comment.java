package ix.solution.consulting.api.board.comment.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import ix.solution.consulting.api.board.domain.entity.Board;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@ToString
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long id;

    private String writer;
    private String content;

    @JsonIgnore
    private String password;

    @CreationTimestamp
    private LocalDateTime createAt;

    @UpdateTimestamp
    private LocalDateTime UpdateAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    @ToString.Exclude
    private Board post;

    protected Comment() {}

    @Builder
    public Comment(Long id, String writer, String content, String password, Board post) {
        this.id = id;
        this.writer = writer;
        this.content = content;
        this.password = password;
        this.post = post;
    }

    public void updateContent(String updateContent) {
        this.content = updateContent;
    }
}
