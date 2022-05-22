package ix.solution.consulting.api.board.comment.domain.entity;

import ix.solution.consulting.api.board.domain.entity.Board;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Comment {

    @Id
    @Column(name = "comment_id")
    private Long id;

    private String writer;
    private String content;

    @CreationTimestamp
    private LocalDateTime createAt;

    @UpdateTimestamp
    private LocalDateTime UpdateAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Board post;
}
