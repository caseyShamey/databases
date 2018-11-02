DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(250) NOT NULL,
  userid init NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (id)
);


DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (id_rooms) REFERENCES `rooms` (`id`);
-- ALTER TABLE `rooms` ADD FOREIGN KEY (id_messages) REFERENCES `messages` (`id`);
-- ALTER TABLE `rooms` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
-- ALTER TABLE `users` ADD FOREIGN KEY (id_messages) REFERENCES `messages` (`id`);
-- ALTER TABLE `users` ADD FOREIGN KEY (id_rooms) REFERENCES `rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`message`,`created at`,`id_users`,`id_rooms`) VALUES
-- ('','','','','');
-- INSERT INTO `rooms` (`id`,`room`,`id_messages`,`id_users`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`id`,`user`,`id_messages`,`id_rooms`,`friends`) VALUES
-- ('','','','','');

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

