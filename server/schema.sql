CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id VARCHAR(20) primary key,
  username VARCHAR(20),
  message VARCHAR(20),
  createdAt DATE
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

