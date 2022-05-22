package ix.solution.consulting.api.board.domain.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@Builder
public class BoardPageDTO {
    private final String nickname;
    private final Long postId;
    private final String postTitle;
}
