package ix.solution.consulting.api.board.comment.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Comment {

    @Id
    @Column(name = "comment_id")
    private Integer id;
}
