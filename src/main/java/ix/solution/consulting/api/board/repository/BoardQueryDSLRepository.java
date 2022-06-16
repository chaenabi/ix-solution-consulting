package ix.solution.consulting.api.board.repository;

import ix.solution.consulting.api.board.domain.entity.Board;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BoardQueryDSLRepository {
    Optional<Board> findByPostId(Long postId);
    Optional<Board> findOneByPostId(Long postId);
}
