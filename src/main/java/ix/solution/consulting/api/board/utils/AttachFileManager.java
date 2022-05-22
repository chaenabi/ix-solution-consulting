package ix.solution.consulting.api.board.utils;

import ix.solution.consulting.api.board.domain.dto.BoardRequestDTO;
import ix.solution.consulting.api.board.domain.dto.BoardResponseDTO;
import ix.solution.consulting.api.board.domain.entity.PostAttachFile;
import ix.solution.consulting.exception.board.BoardCrudErrorCode;
import ix.solution.consulting.exception.common.BizException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.apache.commons.io.FilenameUtils.getBaseName;
import static org.apache.commons.io.FilenameUtils.getExtension;

/**
 * 공지사항 등록시 함께 업로드된 첨부파일들의 이름 변경 및
 * 디스크에 저장하는 로직을 수행하는 클래스
 *
 * @author MC Lee
 * @created 2022-05-22
 * @since 2.6.7 spring boot
 * @since 0.0.1 dev
 */
@Slf4j
@Component
public class AttachFileManager {

    @Value("${upload-directory}")
    private String DEFAULT_UPLOAD_DIRECTORY;

    /**
     * 업로드 파일들을 지정된 경로에 모두 저장하고 첨부파일 목록을 반환하여
     * 데이터베이스에도 첨부파일명 등이 저장될 수 있도록 합니다.
     *
     * @param attachFiles 업로드된 첨부파일들
     * @return 수정된 첨부파일명 (첨부파일명_날짜(년월일시간분초)_UUID일부분.확장자명)
     */
    public List<BoardResponseDTO.UploadPostAttachFile> saveUploadFilesToDisk(final List<MultipartFile> attachFiles) {
        final List<BoardRequestDTO.PostAttachFileDTO> files = renameFile(attachFiles);
        final List<BoardResponseDTO.UploadPostAttachFile> result = new ArrayList<>();

        final File folder = new File(DEFAULT_UPLOAD_DIRECTORY);

        if (!folder.exists()) {
            try {
                Files.createDirectories(Paths.get(DEFAULT_UPLOAD_DIRECTORY));
            } catch (IOException e) {
                throw new RuntimeException("업로드 폴더를 생성할 수 없었습니다.");
            }
        }

        final int attachFileMeasure = attachFiles.size();
        for (int i = 0; i < attachFileMeasure; i++) {
            try {
                attachFiles.get(i).transferTo(Paths.get(files.get(i).getFilename()));
            } catch (IOException e) {
                throw new RuntimeException(e.getMessage());
            }
        }
        files.forEach(file -> result.add(file.toResponseDTO()));
        return result;
    }

    public void deleteFilesToDisk(String attachFile) {
        final File file = new File(DEFAULT_UPLOAD_DIRECTORY + attachFile);
        if (file.exists()) {
            if (file.delete()) log.info("{} 삭제 완료.", attachFile);
            else throw new BizException(BoardCrudErrorCode.FAIL_TO_DELETE_ATTACH_FILE);
        }
    }

    public boolean doesFileExist(String filename) {
        final File file = new File(filename);
        return file.exists();
    }

    /**
     * 같은 파일명이 이미 저장소에 있을 경우 문제가 될 수 있습니다. (파일명 중복시 의도한 파일을 찾지 못하는 문제)
     * 따라서 모든 첨부파일의 이름을 다음과 같이 변경합니다. "DEFAULT_UPLOAD_DIRECTORY첨부파일명_날짜(년월일시간분초)+랜덤문자열.확장자"
     * <p>
     * 예를들어 원본파일명이 example.png 라면 c:/upload/example_20220128171150_bcdc8ebd.png 로 변경됩니다.
     *
     * @param attachFiles 업로드된 첨부파일들
     * @return 수정된 첨부파일명
     */
    private List<BoardRequestDTO.PostAttachFileDTO> renameFile(List<MultipartFile> attachFiles) {
        final List<BoardRequestDTO.PostAttachFileDTO> files = new ArrayList<>();

        final LocalDateTime now = LocalDateTime.now();
        final String randomString = UUID.randomUUID().toString().split("-")[0];

        attachFiles.forEach(file -> files.add(BoardRequestDTO.PostAttachFileDTO.builder()
                    .originalFilename(file.getOriginalFilename())
                    .filepath(DEFAULT_UPLOAD_DIRECTORY)
                    .filename(
                        getBaseName(file.getOriginalFilename())
                        + "_"
                        + now.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"))
                        + "_"
                        + randomString
                        + "."
                        + getExtension(file.getOriginalFilename())
                )
                .build()));

        return files;
    }
}
