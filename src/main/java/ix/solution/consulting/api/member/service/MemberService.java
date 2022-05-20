package ix.solution.consulting.api.member.service;

import ix.solution.consulting.api.member.domain.dto.MemberRequestDTO;
import ix.solution.consulting.api.member.domain.dto.MemberResponseDTO;
import ix.solution.consulting.api.member.domain.entity.Member;
import ix.solution.consulting.api.member.repository.MemberRepository;
import ix.solution.consulting.config.security.utils.JwtUtil;
import ix.solution.consulting.exception.common.BizException;
import ix.solution.consulting.exception.member.MemberCrudErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder encoder;

    @Transactional(rollbackFor = RuntimeException.class)
    public MemberResponseDTO.Register signUp(MemberRequestDTO.Register register) {
        register.encodePassword(encoder.encode(register.getPassword()));
        Member savedMember = memberRepository.save(register.toEntity());
        return MemberResponseDTO.Register
                .builder()
                .id(savedMember.getId())
                .name(savedMember.getName())
                .nickname(savedMember.getNickname())
                .role(savedMember.getRole())
                .build();
    }

    @Transactional(readOnly = true)
    public MemberResponseDTO.SignIn signIn(MemberRequestDTO.SignIn signIn) {

        Member member = memberRepository.findByNickname(signIn.getNickname())
                .orElseThrow(() -> new BizException(MemberCrudErrorCode.MEMBER_NOT_FOUND));

        if (!encoder.matches(signIn.getPassword(), member.getPassword()))
            throw new BizException(MemberCrudErrorCode.MEMBER_PASSWORD_IS_INVALID);

        JwtUtil jwtUtil = new JwtUtil();
        jwtUtil.setTokenCreationIngredient(member.getNickname());

        return MemberResponseDTO.SignIn.builder()
                .id(member.getId())
                .name(member.getName())
                .nickname(member.getNickname())
                .accessToken(jwtUtil.createAccessToken())
                .build();
    }
}
