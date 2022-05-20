package ix.solution.consulting.api.member.domain.dto;

import ix.solution.consulting.api.member.domain.enums.MemberRole;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

public class MemberResponseDTO {

    @Builder
    @RequiredArgsConstructor
    @Getter
    public static class Register {
        private final Long id;
        private final String name;
        private final String nickname;
        private final MemberRole role;
    }

    @Builder
    @RequiredArgsConstructor
    @Getter
    public static class SignIn {
        private final Long id;
        private final String name;
        private final String nickname;
        private final String accessToken;
    }

}
