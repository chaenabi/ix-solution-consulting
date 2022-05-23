package ix.solution.consulting.api.board.comment.controller;

import ix.solution.consulting.api.board.comment.domain.dto.CommentRequestDTO;
import ix.solution.consulting.api.board.comment.domain.enums.CommentMessage;
import ix.solution.consulting.api.board.comment.service.CommentService;
import ix.solution.consulting.api.common.ResponseDTO;
import ix.solution.consulting.exception.comment.CommentCrudErrorCode;
import ix.solution.consulting.exception.comment.InvalidCommentParameterException;
import ix.solution.consulting.exception.common.BizException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/comments")
    public ResponseDTO<Void> addComment(@Valid @RequestBody CommentRequestDTO.AddComment comment, BindingResult result) {
        if (result.hasErrors()) throw new InvalidCommentParameterException(result, CommentCrudErrorCode.COMMENT_CRUD_FAIL);
        commentService.addComment(comment);
        return new ResponseDTO<>(CommentMessage.SAVE_COMMENT_SUCCESS, HttpStatus.OK);
    }

    @PatchMapping("/comments")
    public ResponseDTO<Void> updateComment(@Valid @RequestBody CommentRequestDTO.UpdateComment comment, BindingResult result) {
        if (result.hasErrors()) throw new InvalidCommentParameterException(result, CommentCrudErrorCode.COMMENT_CRUD_FAIL);
        commentService.updateComment(comment);
        return new ResponseDTO<>(CommentMessage.UPDATE_COMMENT_SUCCESS, HttpStatus.OK);
    }

    @PatchMapping("/comments/remove")
    public ResponseDTO<Void> removeComment(@Valid @RequestBody CommentRequestDTO.RemoveComment comment, BindingResult result) {
        if (result.hasErrors()) throw new InvalidCommentParameterException(result, CommentCrudErrorCode.COMMENT_CRUD_FAIL);
        commentService.deleteComment(comment);
        return new ResponseDTO<>(CommentMessage.DELETE_COMMENT_SUCCESS, HttpStatus.OK);
    }

}
