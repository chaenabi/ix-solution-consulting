package ix.solution.consulting.api.member.controller;


import ix.solution.consulting.api.common.ResponseDTO;
import ix.solution.consulting.api.member.domain.dto.MemberRequestDTO;
import ix.solution.consulting.api.member.domain.dto.MemberResponseDTO;
import ix.solution.consulting.api.member.domain.enums.MemberMessage;
import ix.solution.consulting.api.member.service.MemberService;
import ix.solution.consulting.exception.member.InvalidMemberParameterException;
import ix.solution.consulting.exception.member.MemberCrudErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping("/v1")
public class MemberController {

    private final MemberService memberService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/register")
    public ResponseDTO<MemberResponseDTO.Register> signUp(@Valid @RequestBody MemberRequestDTO.Register register, BindingResult result) {
        if (result.hasErrors()) throw new InvalidMemberParameterException(result, MemberCrudErrorCode.MEMBER_CRUD_FAIL);
        return new ResponseDTO<>(memberService.signUp(register), MemberMessage.SUCCESS_MEMBER_REGISTER, HttpStatus.OK);
    }

    @GetMapping("/auth/login")
    public ResponseDTO<MemberResponseDTO.SignIn> signIn(@Valid @RequestBody MemberRequestDTO.SignIn signIn, BindingResult result) {
        if (result.hasErrors()) throw new InvalidMemberParameterException(result, MemberCrudErrorCode.MEMBER_CRUD_FAIL);
        return new ResponseDTO<>(memberService.signIn(signIn), MemberMessage.SUCCESS_MEMBER_SIGNIN, HttpStatus.OK);
    }

}
