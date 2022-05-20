package ix.solution.consulting.api.member.domain.enums;

import lombok.Getter;

@Getter
public enum MemberRole {
    ROLE_ADMIN("관리자"), ROLE_NORMAL("일반"), ROLE_VIP("VIP");

    private final String roleAsString;

    MemberRole(String roleAsString) {
        this.roleAsString = roleAsString;
    }
}
