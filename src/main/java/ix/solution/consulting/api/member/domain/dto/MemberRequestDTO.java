package ix.solution.consulting.api.member.domain.dto;


import ix.solution.consulting.exception.common.ErrorMessage;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotNull;

public class MemberRequestDTO {

    @RequiredArgsConstructor
    static class Register {

        @NotNull(message = ErrorMessage.BOARD_CONTENT_IS_EMPTY)
        private final String name;

        
    }

}
