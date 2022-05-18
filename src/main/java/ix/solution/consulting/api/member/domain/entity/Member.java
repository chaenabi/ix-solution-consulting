package ix.solution.consulting.api.member.domain.entity;

import ix.solution.consulting.api.member.domain.enums.Role;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Member {

    @Id
    private Integer id;

    private String name;
    private String nickname;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @CreationTimestamp
    private LocalDateTime registerDate;
}
