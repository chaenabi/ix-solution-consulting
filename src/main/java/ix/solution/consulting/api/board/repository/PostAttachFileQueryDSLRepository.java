package ix.solution.consulting.api.board.repository;

import ix.solution.consulting.api.board.domain.entity.PostAttachFile;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 게시물 첨부파일 레포지토리 - QueryDSL
 *
 * @author MC Lee
 * @created 2022-05-22
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@Repository
public interface PostAttachFileQueryDSLRepository {
    List<PostAttachFile> findByPostId(Long postId);
}
