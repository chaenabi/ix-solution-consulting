package ix.solution.consulting.config.security.service;

import ix.solution.consulting.api.member.domain.dto.MemberVO;
import ix.solution.consulting.api.member.domain.entity.Member;
import ix.solution.consulting.api.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userDetailsService")
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String nickname) throws UsernameNotFoundException {
        Member member = memberRepository.findByNickname(nickname)
                                        .orElseThrow(() -> new UsernameNotFoundException("유저 별명으로 유저를 찾을 수 없습니다."));

        MemberVO memberVO = new MemberVO();
        BeanUtils.copyProperties(member, memberVO);

        return new AccountContext(memberVO, List.of(new SimpleGrantedAuthority(member.getRole().name())));
    }
}