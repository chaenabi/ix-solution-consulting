package ix.solution.consulting.api.member.service;

import ix.solution.consulting.api.member.domain.dto.MemberRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender emailSender;

    @Value("${spring.mail.username}")
    private String username;

    public void sendAsk(MemberRequestDTO.AskEmail ask) throws MessagingException {
        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, "UTF-8");
        // get mail to client

        helper.setFrom(username);
        helper.setTo(username);
        helper.setSubject(ask.getAskTitle());
        helper.setText(
                "문의신청일자: " + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")) + "<br><br>" +
                "상담신청자명: " + ask.getName() + "<br><br>" +
                        "문의자 이메일: " + ask.getEmail() + "<br><br>" +
                        "상담신청 종류: " + ask.getFirstOption() + "<br><br>" +
                        "상담자 연락처: " + ask.getCellPhone() + "<br><br>" +
                        (ask.getSecondOption() == null ? "" : "세부 상담 신청 종류: " + (ask.getSecondOption() + "<br>")) +
                        "[상담 제목]<br><br> " + ask.getAskTitle() + "<br><br>" +
                        "[상담 내용]<br><br> " + ask.getAskContent() + "<br><br>"
        , true);
        emailSender.send(message);

        // send mail to client
        helper.setFrom(username);
        helper.setTo(ask.getEmail());
        helper.setSubject("[ix-consulting] 상담 신청이 성공적으로 접수되었습니다.");
        helper.setText("<br>" + ask.getName() + "님, " +
                "상담 문의 주셔서 진심으로 감사드립니다.<br>" +
                "상담 신청이 성공적으로 접수되었습니다.<br>" +
                "1차 상담을 진행하기 위한 추가 정보가 필요합니다. <br><br>" +
                "<p style='color: red; font-weight: bold;'>- 고객명</p>" +
                "<p style='color: red; font-weight: bold;'>- 전화번호</p>" +
                "<p style='color: red; font-weight: bold;'>- 희망대학(의대 컨설팅일 경우) 1~3지망</p>" +
                "<p style='color: red; font-weight: bold;'>- 최종 학력 성적표(첨부)</p>" +
                "<p style='color: red; font-weight: bold;'>- 공인영어점수(토플,아이엘츠 등)</p> (공인영어점수 미보유시 대략적인 영어실력 설명 바랍니다.)" +
                "<p style='color: red; font-weight: bold;'>- 연락 가능한 요일 및 시간대</p>" +
                "- 카카오톡 아이디 (선택사항)<br><br><br><br>" +

                "<b>※ 1차 상담은 무료입니다.</b>" +
                "<br> 1차 상담은 전화 또는 화상회의 방식으로 진행하며 (선택 가능), <br> 부득이한 경우로 전화통화가 불가능 할 시 카톡으로 대체할 수 있습니다. (카톡아이디 필요) <br><br>" +
                "<b>1차 상담 후 2차 상담 및 컨설팅 진행 여부를 선택하실 수 있으며, 진행하길 원치 않으시면 고객의 모든 자료는 즉시 파기됩니다.</b><br>",
                true);

        emailSender.send(message);
    }
}
