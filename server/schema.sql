DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE rooms(
  id INTEGER UNIQUE AUTO_INCREMENT, roomname VARCHAR(30), PRIMARY KEY (id)
);

CREATE TABLE users(
  id INTEGER UNIQUE AUTO_INCREMENT, username VARCHAR(30), PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INTEGER UNIQUE AUTO_INCREMENT, content VARCHAR(100),
  id_roomname INTEGER, id_users INTEGER, PRIMARY KEY (id),
  FOREIGN KEY (id_roomname) REFERENCES rooms (id),
  FOREIGN KEY (id_users) REFERENCES users (id) 
);

show tables;

DESCRIBE messages;

INSERT INTO messages (content) VALUES ('hello world');
INSERT INTO messages (content) VALUES ('lol');
INSERT INTO messages (content) VALUES ('haha');
INSERT INTO rooms (roomname) VALUES('random chat');
INSERT INTO users (username) VALUES('blinky dancer');

SELECT * FROM messages;
SELECT * FROM rooms;
SELECT * FROM users;


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

