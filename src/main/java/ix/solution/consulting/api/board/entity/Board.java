package ix.solution.consulting.api.board.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Board {

    @Id
    @Column(name = "board_id")
    private Integer id;
    private String title;
    private String contents;
    private String ImagePath;
    private String VideoPath;
}
