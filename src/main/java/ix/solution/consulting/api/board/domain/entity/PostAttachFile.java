package ix.solution.consulting.api.board.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.AUTO;

/**
 * 게시물 첨부파일 엔티티
 *
 * @author MC Lee
 * @created 2022-05-22
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@Entity
@Getter @Setter
public class PostAttachFile {

    @Id
    @GeneratedValue(strategy = AUTO)
    @Column(name = "attach_file_id")
    private Long id;

    private String filename;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "post_id")
    private Board post;

    public PostAttachFile() {}

    @Builder
    public PostAttachFile(Long id, String filename, Board post) {
        this.id = id;
        this.filename = filename;
        this.post = post;
    }
}
