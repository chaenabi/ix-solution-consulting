package ix.solution.consulting.config.security.service;

import ix.solution.consulting.api.member.domain.dto.MemberVO;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

@Getter
public class AccountContext extends User {
    private final MemberVO memberVO;

    public AccountContext(MemberVO memberVO, Collection<? extends GrantedAuthority> authorities) {
        super(memberVO.getNickname(), memberVO.getPassword(), authorities);
        this.memberVO = memberVO;
    }
}