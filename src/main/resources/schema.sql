-- with mysql

create table member (
    member_id bigint auto_increment,
    name varchar(255),
    nickname varchar(255),
    password varchar(255),
    register_date timestamp,
    role varchar(30),
    primary key (member_id),
    unique index ix_nickname (nickname)
);

create table board (
    post_id bigint auto_increment,
    blocked varchar(255),
    post_content mediumtext,
    post_title varchar(255),
    member_id bigint,
    primary key (post_id)
);

create table comment (
    comment_id bigint auto_increment,
    writer varchar(255),
    content varchar(2000),
    password varchar(255),
    create_at timestamp,
    update_at timestamp,
    post_id bigint,
    primary key (comment_id)
);

create table post_attach_file (
    attach_file_id bigint auto_increment,
    file_type varchar(255),
    filename varchar(255),
    filepath varchar(255),
    original_filename varchar(255),
    post_id bigint,
    primary key (attach_file_id)
);


alter table board
    add constraint FKsds8ox89wwf6aihinar49rmfy
        foreign key (member_id)
            references member;

alter table comment
    add constraint FKo9w4gwrw2tah8j742eftgpsoq
        foreign key (post_id)
            references board;


