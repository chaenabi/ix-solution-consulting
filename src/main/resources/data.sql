INSERT INTO member (member_id, name, nickname, password, role, register_date)
VALUES ('1', '테스트관리자1', '테스트아이디1', '$2a$12$2ggtOMUBemP6Y3o6M.h9QuBFBy6ZXeoTbCYRp1rV6ZbDJZImOzKwG', 'ROLE_ADMIN', now()); -- pw: 1234
INSERT INTO member (member_id, name, nickname, password, role, register_date)
VALUES ('2', '테스트관리자2', '테스트아이디2', '$2a$12$2ggtOMUBemP6Y3o6M.h9QuBFBy6ZXeoTbCYRp1rV6ZbDJZImOzKwG', 'ROLE_ADMIN', now()); -- pw: 1234


INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('1', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('2', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('3', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('4', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('5', 'N', '글 내용', '글 제목', '영어교육', '2', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('6', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('7', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('8', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('9', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('10', 'N', '글 내용', '글 제목', '영어교육', '2', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('11', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('12', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('13', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('14', 'N', '글 내용', '글 제목', '영어교육', '1', now(), 0);
INSERT INTO board (post_id, blocked, post_content, post_title, category_name, member_id, create_at, saw_count)
VALUES ('15', 'N', '글 내용', '글 제목', '영어교육', '2', now(), 0);

INSERT INTO comment (comment_id, writer, content, password, create_at, post_id)
VALUES (1, '테스트댓글아이디1', '댓글 작성1', '$2a$12$2ggtOMUBemP6Y3o6M.h9QuBFBy6ZXeoTbCYRp1rV6ZbDJZImOzKwG', now(), 15);
INSERT INTO comment (comment_id, writer, content, password, create_at, post_id)
VALUES (2, '테스트댓글아이디2', '댓글 작성2', '$2a$12$2ggtOMUBemP6Y3o6M.h9QuBFBy6ZXeoTbCYRp1rV6ZbDJZImOzKwG', now(), 15);
INSERT INTO comment (comment_id, writer, content, password, create_at, post_id)
VALUES (3, '테스트댓글아이디3', '댓글 작성3', '$2a$12$2ggtOMUBemP6Y3o6M.h9QuBFBy6ZXeoTbCYRp1rV6ZbDJZImOzKwG', now(), 15);
INSERT INTO comment (comment_id, writer, content, password, create_at, post_id)
VALUES (4, '테스트댓글아이디4', '댓글 작성4', '$2a$12$2ggtOMUBemP6Y3o6M.h9QuBFBy6ZXeoTbCYRp1rV6ZbDJZImOzKwG', now(), 14);