package ix.solution.consulting.api.board.comment.service;

import ix.solution.consulting.api.board.comment.domain.dto.CommentRequestDTO;
import ix.solution.consulting.api.board.comment.domain.entity.Comment;
import ix.solution.consulting.api.board.comment.repository.CommentRepository;
import ix.solution.consulting.api.board.domain.entity.Board;
import ix.solution.consulting.api.board.repository.BoardRepository;
import ix.solution.consulting.exception.board.BoardCrudErrorCode;
import ix.solution.consulting.exception.comment.CommentCrudErrorCode;
import ix.solution.consulting.exception.common.BizException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = RuntimeException.class)
public class CommentService {

    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    private final PasswordEncoder encoder;

    public void addComment(CommentRequestDTO.AddComment comment) {
        Board post = boardRepository.findById(comment.getPostId())
                .orElseThrow(() -> new BizException(BoardCrudErrorCode.POST_NOT_FOUND));
        comment.encodePassword(encoder.encode(comment.getPassword()));
        commentRepository.save(comment.toEntity(post));
    }

    public void updateComment(CommentRequestDTO.UpdateComment wantToUpdate) {
        Comment comment = commentRepository.findById(wantToUpdate.getCommentId())
                .orElseThrow(() -> new BizException(CommentCrudErrorCode.COMMENT_NOT_FOUND));

        if (encoder.matches(wantToUpdate.getPassword(), comment.getPassword()))
            comment.updateContent(wantToUpdate.getContent());
        else
            throw new BizException(CommentCrudErrorCode.COMMENT_PASSWORD_NOT_MATCH);

    }

    public void deleteComment(CommentRequestDTO.RemoveComment wantToDelete) {
        Comment comment = commentRepository.findById(wantToDelete.getCommentId())
                .orElseThrow(() -> new BizException(CommentCrudErrorCode.COMMENT_NOT_FOUND));

        if (encoder.matches(wantToDelete.getPassword(), comment.getPassword()))
            commentRepository.delete(comment);
        else
            throw new BizException(CommentCrudErrorCode.COMMENT_PASSWORD_NOT_MATCH);

    }
}
