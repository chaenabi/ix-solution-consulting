package ix.solution.consulting.api.member.service;

import ix.solution.consulting.api.member.domain.dto.MemberRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender emailSender;

    public void sendAsk(MemberRequestDTO.AskEmail ask) {
        SimpleMailMessage message = new SimpleMailMessage();
        // get mail to client
        message.setFrom("tom8672@naver.com");
        message.setTo("tom8672@naver.com");
        message.setSubject(ask.getAskTitle());
        message.setText(
                "보낸이:" + ask.getName() + "\n" +
                "문의자 이메일:" + ask.getEmail() + "\n" +
                "상담 신청 종류: " + ask.getFirstOption() + "\n" +
                (ask.getSecondOption() == null ? "" : "세부 상담 신청 종류: " + (ask.getSecondOption() + "\n")) +
                "상담자 연락처: " + ask.getCellPhone() + "\n" +
                "상담 제목:" + ask.getAskTitle() + "\n" +
                "상담 내용:" + ask.getAskContent() + "\n"
        );
        emailSender.send(message);

        // send mail to client
        message.setFrom("tom8672@naver.com");
        message.setTo(ask.getEmail());
        message.setSubject("[ix-consulting] 상담 신청이 성공적으로 접수되었습니다.");
        message.setText("상담 문의 주셔서 진심으로 감사드립니다.\n" +
                "1차 상담을 진행하기 위해서는 추가 정보가 필요합니다. \n\n" +
                "- 고객명\n" +
                "- 전화번호\n" +
                "- 카카오톡 아이디 (선택사항)\n" +
                "- 희망대학(의대 컨설팅일 경우) 1~3지망\n" +
                "- 상담 받고 싶은 내용\n" +
                "- 연락 가능한 요일 및 시간대\n" +
                "- 최종 학력 성적표(첨부)\n" +
                "- 공인영어점수(토플,아이엘츠 등)-미보유시 대략적인 영어실력 설명 바람\n\n" +

        "※ 1차 상담은 무료입니다. 전화나 화상회의 방식으로 진행하며(선택가능), \n 부득이한 경우로 전화통화가 불가능 할 시 카톡으로 대체할 수 있습니다. (카톡아이디 필요) \n\n" +
        "1차 상담 후 2차 상담 및 컨설팅 진행 여부를 선택하실 수 있으며, 진행하길 원치 않으시면 고객의 모든 자료는 즉시 파기됩니다.\n");
        emailSender.send(message);
    }
}
