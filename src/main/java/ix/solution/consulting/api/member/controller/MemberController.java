package ix.solution.consulting.api.member.controller;


import ix.solution.consulting.api.common.ResponseDTO;
import ix.solution.consulting.api.member.domain.dto.MemberRequestDTO;
import ix.solution.consulting.api.member.domain.dto.MemberResponseDTO;
import ix.solution.consulting.api.member.domain.enums.MemberMessage;
import ix.solution.consulting.api.member.service.EmailService;
import ix.solution.consulting.api.member.service.MemberService;
import ix.solution.consulting.exception.common.BizException;
import ix.solution.consulting.exception.member.InvalidMemberParameterException;
import ix.solution.consulting.exception.member.MemberCrudErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/v1")
public class MemberController {

    private final MemberService memberService;
    private final EmailService emailService;

    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/register")
    public ResponseDTO<MemberResponseDTO.Register> signUp(@Valid @RequestBody MemberRequestDTO.Register register, BindingResult result) {
        if (result.hasErrors()) throw new InvalidMemberParameterException(result, MemberCrudErrorCode.MEMBER_CRUD_FAIL);
        return new ResponseDTO<>(memberService.signUp(register), MemberMessage.SUCCESS_MEMBER_REGISTER, HttpStatus.OK);
    }

    @PostMapping("/auth/login")
    public ResponseDTO<MemberResponseDTO.SignIn> signIn(@Valid @RequestBody MemberRequestDTO.SignIn signIn, BindingResult result) {
        if (result.hasErrors()) throw new InvalidMemberParameterException(result, MemberCrudErrorCode.MEMBER_CRUD_FAIL);
        return new ResponseDTO<>(memberService.signIn(signIn), MemberMessage.SUCCESS_MEMBER_SIGNIN, HttpStatus.OK);
    }

    // prevent jwt expired when posting
    @GetMapping("/auth/login")
    public ResponseDTO<MemberResponseDTO.SignIn> preventJwtExpire(Authentication authentication) {
        if (!authentication.isAuthenticated()) throw new BizException(MemberCrudErrorCode.NOT_SIGNED);
        return new ResponseDTO<>(memberService.preventJwtExpire(String.valueOf(authentication.getPrincipal())), MemberMessage.SUCCESS_MEMBER_SIGNIN, HttpStatus.OK);
    }

    @PostMapping("/mail")
    public ResponseEntity<String> manageAskEmail(@RequestBody MemberRequestDTO.AskEmail ask) throws MessagingException {
        emailService.sendAsk(ask);
        return ResponseEntity.ok().body("접수 완료. 작성하신 이메일로 안내사항을 보내드리니 확인 부탁드립니다.");
    }
}
