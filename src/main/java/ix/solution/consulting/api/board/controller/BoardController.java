package ix.solution.consulting.api.board.controller;

import ix.solution.consulting.api.board.domain.dto.BoardRequestDTO;
import ix.solution.consulting.api.board.domain.dto.BoardResponseDTO;
import ix.solution.consulting.api.board.domain.enums.BoardMessage;
import ix.solution.consulting.api.board.service.BoardService;
import ix.solution.consulting.api.common.ResponseDTO;
import ix.solution.consulting.exception.board.BoardCrudErrorCode;
import ix.solution.consulting.exception.board.InvalidBoardParameterException;
import ix.solution.consulting.exception.common.BizException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

/**
 * 게시물과 관련된 작업 요청을 처리하는 컨트롤러
 *
 * @author MC Lee
 * @created 2022-05-22
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/v1")
public class BoardController {

    private final BoardService boardService;

    /**
     * 게시물 저장 요청을 받아 저장 처리후 반환값으로 저장된 게시물의 postId를 반환합니다.
     *
     * @param dto 게시물 제목, 게시물 내용, 이미지 주소 (선택사항)
     * @return 성공적으로 저장된 게시물의 고유 아이디
     */
    @PostMapping("/posts")
    public ResponseDTO<Long> savePost(@Valid @RequestBody BoardRequestDTO.PostSaveRequest dto, BindingResult result) {
        if (result.hasErrors()) throw new InvalidBoardParameterException(result, BoardCrudErrorCode.BOARD_CRUD_FAIL);
        return new ResponseDTO<>(boardService.savePost(dto), BoardMessage.SAVE_POST_SUCCESS, HttpStatus.OK);
    }

    @PostMapping("/posts/attachFiles")
    public ResponseDTO<List<BoardResponseDTO.UploadPostAttachFile>> uploadMediaFiles(List<MultipartFile> attachFiles) {
        if (attachFiles.isEmpty()) throw new BizException(BoardCrudErrorCode.POST_MEDIA_NOT_CONTAINS);
        return new ResponseDTO<>(boardService.uploadMediaFiles(attachFiles), BoardMessage.SAVE_ATTACH_FILE_SUCCESS, HttpStatus.OK);
    }

    @DeleteMapping("/posts/attachFiles")
    public ResponseDTO<Void> removeMediaFiles(String attachFiles) {
        boardService.deleteMediaFiles(attachFiles);
        return new ResponseDTO<>(BoardMessage.REMOVE_ATTACH_FILE_SUCCESS, HttpStatus.OK);
    }

    @PatchMapping("/posts")
    public ResponseDTO<BoardResponseDTO.PatchPost> updateOnePost(@Valid @RequestBody BoardRequestDTO.UpdatePostRequest dto, BindingResult result) {
        if (result.hasErrors()) throw new InvalidBoardParameterException(result, BoardCrudErrorCode.BOARD_CRUD_FAIL);
        return new ResponseDTO<>(boardService.updateOnePost(dto), BoardMessage.UPDATE_POST_SUCCESS, HttpStatus.OK);
    }

    @GetMapping("/posts/{postId}")
    public ResponseDTO<BoardResponseDTO.PostOne> findOnePost(@PathVariable Long postId) {
        return new ResponseDTO<>(boardService.findOnePost(postId), BoardMessage.FIND_POST_ONE_SUCCESS, HttpStatus.OK);
    }

    @GetMapping("/posts")
    public ResponseDTO<BoardResponseDTO.PageResponse> findPostPage(@RequestParam int page) {
        return new ResponseDTO<>(boardService.findPostsPage(page), BoardMessage.FIND_POST_PAGE_SUCCESS, HttpStatus.OK);
    }

    @DeleteMapping("/posts/{postId}")
    public ResponseDTO<LocalDateTime> deleteOnePost(@PathVariable Long postId) {
        return new ResponseDTO<>(boardService.deleteOnePost(postId), BoardMessage.DELETE_POST_SUCCESS, HttpStatus.OK);
    }
}
