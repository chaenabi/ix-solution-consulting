package ix.solution.consulting.api.member.domain.enums;

import lombok.Getter;

@Getter
public enum MemberRole {
    ADMIN("관리자"), NORMAL("일반"), VIP("VIP");

    private final String roleAsString;

    MemberRole(String roleAsString) {
        this.roleAsString = roleAsString;
    }
}
