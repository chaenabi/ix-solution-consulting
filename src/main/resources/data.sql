INSERT INTO member (member_id, name, nickname, password, role, register_date)
VALUES ('1', '테스트관리자', '테스트', '$2a$12$2ggtOMUBemP6Y3o6M.h9QuBFBy6ZXeoTbCYRp1rV6ZbDJZImOzKwG', 'ROLE_ADMIN', now()); // pw: 1234

INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('1', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);