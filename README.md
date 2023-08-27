# Library
A project for managing book borrowing. Users can borrow, return, and rate books. Built with Node.js.
SQL sciprt used for creating Database is below.


create table Loans
(
    id         bigint unsigned auto_increment,
    userId     int                  null,
    bookId     int                  null,
    isReturned tinyint(1) default 0 null,
    rating     float                null,
    createdAt  timestamp            not null,
    updatedAt  timestamp            not null,
    constraint id
        unique (id)
);

alter table Loans
    add primary key (id);

create table books
(
    id            int auto_increment
        primary key,
    name          varchar(255)  null,
    averageRating decimal(3, 2) null,
    author        varchar(255)  null,
    createdAt     date          null,
    updatedAt     date          null
);

create table users
(
    id        int auto_increment
        primary key,
    name      varchar(255) null,
    email     varchar(255) null,
    createdAt date         null,
    updatedAt date         null
);


