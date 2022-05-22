package ix.solution.consulting.api.board.service;

import ix.solution.consulting.api.board.domain.dto.BoardRequestDTO;
import ix.solution.consulting.api.board.domain.dto.BoardResponseDTO;
import ix.solution.consulting.api.board.domain.entity.Board;
import ix.solution.consulting.api.board.repository.BoardRepository;
import ix.solution.consulting.api.member.domain.entity.Member;
import ix.solution.consulting.api.member.repository.MemberRepository;
import ix.solution.consulting.exception.board.BoardCrudErrorCode;
import ix.solution.consulting.exception.common.BizException;
import ix.solution.consulting.exception.member.MemberCrudErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

/**
 * 게시물 CRUD 요청 처리 서비스
 *
 * @author MC Lee
 * @created 2022-05-22
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@RequiredArgsConstructor
@Service
@Transactional(rollbackFor = RuntimeException.class)
public class BoardService {

    private final MemberRepository memberRepository;
    private final BoardRepository postRepository;
    int pagingSize = 10;

    public Long savePost(BoardRequestDTO.PostSaveRequest dto) {

        Member member = memberRepository.findById(dto.getMemberId())
                .orElseThrow(() -> new BizException(MemberCrudErrorCode.MEMBER_NOT_FOUND));

        return postRepository.save(dto.toEntity(member))
                .getPostId();
    }

    public BoardResponseDTO.PostOne findOnePost(Long postId) {
        Board post = postRepository.findById(postId)
                .orElseThrow(() -> new BizException(BoardCrudErrorCode.POST_NOT_FOUND));
        return new BoardResponseDTO.PostOne(post);
    }

    public BoardResponseDTO.PageResponse findPostsPage(int page) {
        if ((page = page - 1) < 0) {
            throw new BizException(BoardCrudErrorCode.PAGE_NOT_FOUND);
        }

        Pageable pageable = PageRequest.of(page, pagingSize, Sort.by(Sort.Direction.DESC, "postId"));
        BoardResponseDTO.PageResponse pageResponseDTO = new BoardResponseDTO.PageResponse(page, postRepository.findAllUnblockedPosts(pageable));

        if (pageResponseDTO.getTotalPages() < (page + 1)) {
            throw new BizException(BoardCrudErrorCode.PAGE_NOT_FOUND);
        }

        return pageResponseDTO;
    }

    public BoardResponseDTO.PatchPost updateOnePost(BoardRequestDTO.UpdatePostRequest dto) {
        Board post = postRepository.findById(dto.getPostId())
                .orElseThrow(() -> new BizException(BoardCrudErrorCode.POST_NOT_FOUND));
        return new BoardResponseDTO.PatchPost(post.updatePost(dto.toEntity()));
    }

    public LocalDateTime deleteOnePost(Long postId) {
        Board canFindPost = postRepository.findById(postId)
                .orElseThrow(() -> new BizException(BoardCrudErrorCode.POST_NOT_FOUND));
        postRepository.delete(canFindPost);
        return LocalDateTime.now();
    }
}
