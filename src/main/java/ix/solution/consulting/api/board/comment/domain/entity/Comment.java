package ix.solution.consulting.api.board.comment.domain.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
}
