package ix.solution.consulting.api.member.domain.dto;


import ix.solution.consulting.api.member.domain.entity.Member;
import ix.solution.consulting.api.member.domain.enums.MemberRole;
import ix.solution.consulting.exception.common.ErrorMessage;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


public class MemberRequestDTO {

    @Getter
    @RequiredArgsConstructor
    public static class Register {

        @NotNull(message = ErrorMessage.MEMBER_NAME_IS_NULL)
        @NotEmpty(message = ErrorMessage.MEMBER_NAME_IS_EMPTY)
        private final String name;

        @NotNull(message = ErrorMessage.MEMBER_NICKNAME_IS_NULL)
        @NotEmpty(message = ErrorMessage.MEMBER_NICKNAME_IS_EMPTY)
        private final String nickname;

        @NotNull(message = ErrorMessage.MEMBER_PASSWORD_IS_NULL)
        @NotEmpty(message = ErrorMessage.MEMBER_PASSWORD_IS_EMPTY)
        private String password;

        public void encodePassword(String password) {
            this.password = password;
        }

        public Member toEntity() {
            return Member.builder()
                    .name(name)
                    .nickname(nickname)
                    .password(password)
                    .role(MemberRole.ADMIN) // 일반회원의 회원가입을 고려하지 않으며, 관리자의 가입만 고려함. 또한 회원가입은 다른 관리자에 의해서만 가능
                    .build();
        }
    }

    @Getter
    @RequiredArgsConstructor
    public static class SignIn {
        @NotNull(message = ErrorMessage.MEMBER_NICKNAME_IS_NULL)
        @NotEmpty(message = ErrorMessage.MEMBER_NICKNAME_IS_EMPTY)
        private final String nickname;

        @NotNull(message = ErrorMessage.MEMBER_PASSWORD_IS_NULL)
        @NotEmpty(message = ErrorMessage.MEMBER_PASSWORD_IS_EMPTY)
        private final String password;
    }
}
