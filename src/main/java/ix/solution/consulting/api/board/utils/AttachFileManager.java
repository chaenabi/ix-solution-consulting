package ix.solution.consulting.api.board.utils;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.*;
import ix.solution.consulting.api.board.domain.dto.BoardRequestDTO;
import ix.solution.consulting.api.board.domain.dto.BoardResponseDTO;
import ix.solution.consulting.api.board.domain.entity.PostAttachFile;
import ix.solution.consulting.api.board.domain.enums.AttachFileMediaType;
import ix.solution.consulting.exception.board.BoardCrudErrorCode;
import ix.solution.consulting.exception.common.BizException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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
@RequiredArgsConstructor
public class AttachFileManager {

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    /**
     * 업로드 파일들을 지정된 경로에 모두 저장하고 첨부파일 목록을 반환하여
     * 데이터베이스에도 첨부파일명 등이 저장될 수 있도록 합니다.
     *
     * @param attachFile 업로드된 첨부파일
     * @return 수정된 첨부파일명 (첨부파일명_날짜(년월일시간분초)_UUID일부분.확장자명)
     */
    public String saveUploadFilesToDisk(final AttachFileMediaType fileType, final MultipartFile attachFile) {
        final BoardRequestDTO.PostAttachFileDTO file = renameFile(fileType, attachFile);

        File uploadFile = convert(file)  // 파일 변환할 수 없으면 에러
                .orElseThrow(() -> new IllegalArgumentException("error: MultipartFile -> File convert fail"));

        return upload(uploadFile, file);
    }

    public String upload(File uploadFile, BoardRequestDTO.PostAttachFileDTO file) {
        String fileName = file.getFilename();   // S3에 저장될 파일 이름
        String uploadImageUrl = putS3(uploadFile, fileName); // s3로 업로드
        removeNewFile(uploadFile);
        return uploadImageUrl;
    }

    // S3로 업로드
    private String putS3(File uploadFile, String fileName) {
        amazonS3Client.putObject(new PutObjectRequest(bucket, fileName, uploadFile).withCannedAcl(CannedAccessControlList.PublicRead));
        return amazonS3Client.getUrl(bucket, fileName).toString();
    }

    // 로컬에 저장된 이미지 지우기
    private void removeNewFile(File targetFile) {
        if (targetFile.delete()) {
            log.info("File delete success");
            return;
        }
        log.info("File delete fail");
    }

    public void deleteFilesS3(String fileName) {
        amazonS3Client.deleteObject(new DeleteObjectRequest(bucket, fileName));
    }

    public boolean doesFileExist(BoardRequestDTO.PostAttachFileDTO file) {
        S3Object s3Object = amazonS3Client.getObject(new GetObjectRequest(bucket, file.getFilename()));
        return s3Object != null;
    }

    /**
     * 같은 파일명이 이미 저장소에 있을 경우 문제가 될 수 있습니다. (파일명 중복시 의도한 파일을 찾지 못하는 문제)
     * 따라서 모든 첨부파일의 이름을 다음과 같이 변경합니다. "DEFAULT_UPLOAD_DIRECTORY첨부파일명_날짜(년월일시간분초)+랜덤문자열.확장자"
     * <p>
     * 예를들어 원본파일명이 example.png 라면 c:/upload/example_20220128171150_bcdc8ebd.png 로 변경됩니다.
     *
     * @param attachFile 업로드된 첨부파일
     * @return 수정된 첨부파일명
     */
    private BoardRequestDTO.PostAttachFileDTO renameFile(AttachFileMediaType fileType, MultipartFile attachFile) {
        final LocalDateTime now = LocalDateTime.now();
        final String randomString = UUID.randomUUID().toString().split("-")[0];
        final byte[] bytes;
        try {
            bytes = attachFile.getBytes();
        } catch (IOException ie) {
            throw new RuntimeException("invalid image source.", ie);
        }

        return BoardRequestDTO.PostAttachFileDTO.builder()
                    .fileType(fileType)
                    .originalFilename(attachFile.getOriginalFilename())
                    .filepath(System.getProperty("user.dir"))
                    .filename(
                        getBaseName(attachFile.getOriginalFilename())
                        + "_"
                        + now.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"))
                        + "_"
                        + randomString
                        + "."
                        + getExtension(attachFile.getOriginalFilename())
                    )
                    .bytes(bytes)
                    .build();
    }

    // 로컬에 파일 업로드 하기
    private Optional<File> convert(BoardRequestDTO.PostAttachFileDTO file) {
        File convertFile = new File(System.getProperty("user.dir") + "/" + file.getFilename());
        try {
            if (convertFile.createNewFile()) { // 바로 위에서 지정한 경로에 File 이 생성됨 (경로가 잘못되었다면 생성 불가능)
                try (FileOutputStream fos = new FileOutputStream(convertFile)) { // FileOutputStream 데이터를 파일에 바이트 스트림으로 저장하기 위함
                    fos.write(file.getBytes());
                }
                return Optional.of(convertFile);
            }
        } catch (IOException ie) {
            throw new RuntimeException("cannot create image files.", ie);
        }
        return Optional.empty();
    }
}
