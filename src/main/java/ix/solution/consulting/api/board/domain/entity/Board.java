package ix.solution.consulting.api.board.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Board {

    @Id
    @Column(name = "board_id")
    private Long id;
    private String author;
    private String title;
    private String contents;
    private String ImagePath;
    private String VideoPath;
}
