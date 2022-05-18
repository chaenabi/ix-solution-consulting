package ix.solution.consulting.api.member.domain.enums;

public enum Role {
    NORMAL("일반"), VIP("VIP");

    private final String role;

    Role(String role) {
        this.role = role;
    }
}
