package ix.solution.consulting.api.board.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import ix.solution.consulting.api.board.domain.enums.AttachFileMediaType;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

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
@Getter
@Setter
@ToString
public class PostAttachFile {

    @Id
    @GeneratedValue(strategy = AUTO)
    @Column(name = "attach_file_id")
    private Long id;

    private String originalFilename;
    private String filepath;
    private String filename;

    @Enumerated(EnumType.STRING)
    private AttachFileMediaType fileType;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "post_id")
    @ToString.Exclude
    private Board post;

    public PostAttachFile() {
    }

    @Builder
    public PostAttachFile(Long id, String originalFilename, String filepath, String filename, AttachFileMediaType fileType, Board post) {
        this.id = id;
        this.originalFilename = originalFilename;
        this.filepath = filepath;
        this.filename = filename;
        this.post = post;
        this.fileType = fileType;
    }
}
