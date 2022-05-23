package ix.solution.consulting.api.board.repository;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import ix.solution.consulting.api.board.domain.entity.Board;
import ix.solution.consulting.api.board.domain.entity.PostAttachFile;
import ix.solution.consulting.api.board.domain.entity.QBoard;
import ix.solution.consulting.api.board.domain.entity.QPostAttachFile;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * 게시물 첨부파일 레포지토리 구현클래스.
 * 쿼리 DSL 을 기본 API 로 사용합니다.
 *
 * @author MC Lee
 * @created 2022-05-22
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@Repository
public class PostAttachFileRepositoryImpl implements PostAttachFileQueryDSLRepository {

    @PersistenceContext
    private EntityManager entityManager;
    private JPAQueryFactory queryFactory;

    @Override
    public List<PostAttachFile> findByPostId(Long postId) {
        queryFactory = new JPAQueryFactory(entityManager);
        final QPostAttachFile qAttachFile = QPostAttachFile.postAttachFile;
        return queryFactory.selectFrom(qAttachFile)
                .where(qAttachFile.post.postId.eq(postId))
                .fetch();
    }

    @Override
    public void deleteByPostId(Long postId) {
        queryFactory = new JPAQueryFactory(entityManager);
        final QPostAttachFile qAttachFile = QPostAttachFile.postAttachFile;

        queryFactory.delete(qAttachFile)
                .where(qAttachFile.post.postId.eq(postId))
                .execute();
    }
}
