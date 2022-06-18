package ix.solution.consulting.api.board.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import ix.solution.consulting.api.board.comment.domain.entity.QComment;
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
        final QMember qMember = QMember.member;
        final QComment qComment = QComment.comment;


        return Optional.ofNullable(
                queryFactory.selectFrom(qBoard)
                .innerJoin(qBoard.member, qMember)
                .leftJoin(qBoard.comments, qComment)
                .fetchJoin()
                .where(qBoard.postId.eq(postId).and(qBoard.blocked.eq(false)))
                .fetchOne()
        );
    }
}
/*
   select
        distinct board0_.post_id as post_id1_0_0_,
        comments1_.comment_id as comment_1_1_1_,
        member2_.member_id as member_i1_2_2_,
        board0_.blocked as blocked2_0_0_,
        board0_.category_name as category3_0_0_,
        board0_.create_at as create_a4_0_0_,
        board0_.member_id as member_i8_0_0_,
        board0_.post_content as post_con5_0_0_,
        board0_.post_title as post_tit6_0_0_,
        board0_.saw_count as saw_coun7_0_0_,
        comments1_.content as content2_1_1_,
        comments1_.create_at as create_a3_1_1_,
        comments1_.password as password4_1_1_,
        comments1_.post_id as post_id7_1_1_,
        comments1_.update_at as update_a5_1_1_,
        comments1_.writer as writer6_1_1_,
        comments1_.post_id as post_id7_1_0__,
        comments1_.comment_id as comment_1_1_0__,
        member2_.name as name2_2_2_,
        member2_.nickname as nickname3_2_2_,
        member2_.password as password4_2_2_,
        member2_.register_date as register5_2_2_,
        member2_.role as role6_2_2_
    from
        board board0_
    left outer join
        comment comments1_
            on board0_.post_id=comments1_.post_id
    inner join
        member member2_
            on board0_.member_id=member2_.member_id
    where
        board0_.blocked='N'
        and board0_.post_id=1
 */