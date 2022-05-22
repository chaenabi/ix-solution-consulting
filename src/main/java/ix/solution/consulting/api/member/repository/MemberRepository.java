package ix.solution.consulting.api.member.repository;

import ix.solution.consulting.api.member.domain.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    Boolean existsByNickname(String nickName);
    Optional<Member> findByNickname(String nickname);

}
