package ix.solution.consulting.api.board.repository;

import ix.solution.consulting.api.board.domain.entity.PostAttachFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 게시물 첨부파일 레포지토리
 *
 * @author MC Lee
 * @created 2022-05-22
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@Repository
public interface PostAttachFileRepository extends JpaRepository<PostAttachFile, Long>, PostAttachFileQueryDSLRepository {
    PostAttachFile findByFilename(String filename);
}
