package ix.solution.consulting.api.board.service;

import ix.solution.consulting.api.board.domain.dto.BoardRequestDTO;
import ix.solution.consulting.api.board.domain.dto.BoardResponseDTO;
import ix.solution.consulting.api.board.domain.entity.Board;
import ix.solution.consulting.api.board.domain.entity.PostAttachFile;
import ix.solution.consulting.api.board.domain.enums.AttachFileMediaType;
import ix.solution.consulting.api.board.repository.BoardRepository;
import ix.solution.consulting.api.board.repository.PostAttachFileRepository;
import ix.solution.consulting.api.board.utils.AttachFileManager;
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
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

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
    private final PostAttachFileRepository postAttachFileRepository;
    private final AttachFileManager attachFileManager;
    final int pagingSize = 10;

    public Long savePost(BoardRequestDTO.PostSaveRequest dto) {

        Member member = memberRepository.findById(dto.getMemberId())
                .orElseThrow(() -> new BizException(MemberCrudErrorCode.MEMBER_NOT_FOUND));

        Board post = postRepository.save(dto.toEntity(member));

        for (BoardRequestDTO.PostAttachFileDTO file : dto.getAttachFiles()) {
            if (attachFileManager.doesFileExist(file.getFilepath() + file.getFilename())) {
                postAttachFileRepository.save(
                        PostAttachFile.builder()
                                .originalFilename(file.getOriginalFilename())
                                .filepath(file.getFilepath())
                                .filename(file.getFilename())
                                .fileType(file.getFileType())
                                .post(post)
                         .build());
            }
        }

        return post.getPostId();
    }

    // TODO: 댓글 포함 전달 (첨부파일은 text 이므로 상관없음)
    @Transactional(readOnly = true, rollbackFor = RuntimeException.class)
    public BoardResponseDTO.PostOne findOnePost(Long postId) {
        Board post = postRepository.findById(postId)
                .orElseThrow(() -> new BizException(BoardCrudErrorCode.POST_NOT_FOUND));
        return new BoardResponseDTO.PostOne(post);
    }

    @Transactional(readOnly = true, rollbackFor = RuntimeException.class)
    public BoardResponseDTO.PageResponse findPostsPage(int page) {
        if ((page = page - 1) < 0) throw new BizException(BoardCrudErrorCode.PAGE_NOT_FOUND);

        Pageable pageable = PageRequest.of(page, pagingSize, Sort.by(Sort.Direction.DESC, "postId"));
        BoardResponseDTO.PageResponse pageResponseDTO = new BoardResponseDTO.PageResponse(page, postRepository.findAllUnblockedPosts(pageable));

        if (pageResponseDTO.getTotalPages() < (page + 1)) throw new BizException(BoardCrudErrorCode.PAGE_NOT_FOUND);
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

    public List<BoardResponseDTO.UploadPostAttachFile> uploadMediaFiles(AttachFileMediaType fileType, List<MultipartFile> attachFiles) {
        return attachFileManager.saveUploadFilesToDisk(fileType, attachFiles);
    }

    public void deleteMediaFiles(String attachFile) {
        PostAttachFile wantToRemove = postAttachFileRepository.findByFilename(attachFile)
                .orElseThrow(() -> new BizException(BoardCrudErrorCode.POST_MEDIA_NOT_CONTAINS));
        postAttachFileRepository.delete(wantToRemove);
        attachFileManager.deleteFilesToDisk(attachFile);
    }
}