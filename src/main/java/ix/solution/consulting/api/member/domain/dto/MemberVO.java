package ix.solution.consulting.api.member.domain.dto;

import ix.solution.consulting.api.member.domain.enums.MemberRole;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Member 엔티티와 1:1 매핑을 위한 VO 객체.
 * 반드시 위 목적으로만 setter 를 사용해야 합니다. 다른 의도로 setter 를 사용해서는 안됩니다.
 *
 * @author MC Lee
 * @created 2022-05-20
 * @since 0.0.1
 */
@Getter
@Setter
public class MemberVO {
    private Long id;
    private String name;
    private String nickname;
    private String password;
    private List<MemberRole> role;
    private LocalDateTime registerDate;
}
