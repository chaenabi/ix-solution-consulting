package ix.solution.consulting.api.member.domain.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import ix.solution.consulting.api.member.domain.enums.MemberRole;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Table(name = "member", indexes = @Index(name = "ix_nickname", columnList = "nickname", unique = true))
@ToString
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "member_id")
    private Long id;

    private String name;
    private String nickname;

    @JsonIgnore
    private String password;

    @Enumerated(EnumType.STRING)
    private MemberRole role;

    @CreationTimestamp
    private LocalDateTime registerDate;

    protected Member() {
    }

    @Builder
    public Member(Long id, String name, String nickname, String password, MemberRole role) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.role = role;
        this.registerDate = LocalDateTime.now();
    }


}
