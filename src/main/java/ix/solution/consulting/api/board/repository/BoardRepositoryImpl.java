package ix.solution.consulting.api.board.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import ix.solution.consulting.api.board.domain.entity.Board;
import ix.solution.consulting.api.board.domain.entity.QBoard;
import ix.solution.consulting.api.member.domain.entity.QMember;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Optional;

@Repository
public class BoardRepositoryImpl implements BoardQueryDSLRepository {

    @PersistenceContext
    private EntityManager entityManager;
    private JPAQueryFactory queryFactory;

    @Override
    public Optional<Board> findByPostId(Long postId) {
        queryFactory = new JPAQueryFactory(entityManager);
        final QBoard qBoard = QBoard.board;
        return Optional.ofNullable(
                queryFactory.selectFrom(qBoard)
                .innerJoin(qBoard.member, QMember.member)
                .fetchJoin()
                .where(qBoard.postId.eq(postId))
                .fetchOne()
        );

    }
}
