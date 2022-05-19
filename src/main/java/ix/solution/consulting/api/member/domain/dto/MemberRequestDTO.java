package ix.solution.consulting.api.member.domain.dto;


import ix.solution.consulting.exception.common.ErrorMessage;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class MemberRequestDTO {

    @RequiredArgsConstructor
    public static class Register {
        @NotNull(message = ErrorMessage.MEMBER_NAME_IS_NULL)
        @NotEmpty(message = ErrorMessage.MEMBER_NAME_IS_EMPTY)
        private final String name;

        @NotNull(message = ErrorMessage.MEMBER_PASSWORD_IS_NULL)
        @NotEmpty(message = ErrorMessage.MEMBER_PASSWORD_IS_EMPTY)
        private final String password;
    }
}
