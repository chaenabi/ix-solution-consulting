package ix.solution.consulting.api.member.controller;


import ix.solution.consulting.api.member.domain.dto.MemberRequestDTO;
import ix.solution.consulting.api.member.service.MemberService;
import ix.solution.consulting.exception.member.InvalidMemberParameterException;
import ix.solution.consulting.exception.member.MemberCrudErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping("/v1")
public class MemberController {

    private final MemberService memberService;

    @PostMapping
    String register(@Valid @RequestBody MemberRequestDTO.Register register, BindingResult result) {
        if (result.hasErrors()) throw new InvalidMemberParameterException(result, MemberCrudErrorCode.MEMBER_CRUD_FAIL);
        return "login success";
    }

}
