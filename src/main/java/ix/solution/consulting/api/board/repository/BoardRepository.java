package ix.solution.consulting.api.board.post.repository;

import ix.solution.consulting.api.board.domain.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Board Entity 를 조작하는 기능을 제공하는 data-jpa 인터페이스
 *
 * @author MC Lee
 * @created 2022-05-22
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    @Query(value = "SELECT p " +
            "FROM Board p JOIN FETCH p.member m " +
            "WHERE p.blocked = false ",
            countQuery = "SELECT count(p) FROM Board p WHERE p.blocked = false ")
    Page<Board> findAllUnblockedPosts(Pageable pageable);

    @Query(value = "SELECT p " +
            "FROM Board p join fetch p.member m " +
            "WHERE p.blocked = false " +
            "AND p.postId = :postId")
    Optional<Board> findById(@Param("postId") Long postId);
}
