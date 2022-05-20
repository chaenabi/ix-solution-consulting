package ix.solution.consulting.api.member.domain.enums;

import ix.solution.consulting.api.common.SuccessMessage;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum MemberMessage implements SuccessMessage {

    SUCCESS_MEMBER_REGISTER("회원 등록이 성공적으로 완료되었습니다."),
    SUCCESS_MEMBER_UPDATE("회원 수정이 성공적으로 완료되었습니다."),
    SUCCESS_MEMBER_DELETE("회원 삭제가 성공적으로 완료되었습니다."),
    SUCCESS_MEMBER_SELECTONE("회원 단건 조회가 성공적으로 완료되었습니다."),
    SUCCESS_MEMBER_SIGNIN("로그인이 성공적으로 완료되었습니다.");

    private final String successMsg;

    @Override
    public String getSuccessMsg() {
        return successMsg;
    }
}
