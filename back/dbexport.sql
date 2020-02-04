DROP DATABASE IF EXISTS `circus`;

CREATE DATABASE `circus`;

USE `circus`;

DROP TABLE IF EXISTS `contact`;

CREATE TABLE `contact` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `phone` int DEFAULT NULL,
  `email` varchar (100) DEFAULT NULL,
  `adress` varchar (255) DEFAULT NULL
);

DROP TABLE IF EXISTS `image`;

CREATE TABLE `image` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` varchar (100) DEFAULT NULL,
  `source` varchar (255) DEFAULT NULL
);

DROP TABLE IF EXISTS `reservation`;

CREATE TABLE `reservation` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `title` varchar (100) DEFAULT NULL,
  `text` varchar (255) DEFAULT NULL,
  `price` int DEFAULT NULL
);

DROP TABLE IF EXISTS `spectacle`;

CREATE TABLE `spectacle` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `title` varchar (100) DEFAULT NULL,
  `text` varchar (255) DEFAULT NULL
);

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` varchar(60) CHARACTER SET latin1 DEFAULT NULL,
  `password` varchar(256) CHARACTER SET latin1 DEFAULT NULL
);

INSERT INTO
  `users` (`name`, `password`)
VALUES
  (
    'admin1',
    '$2a$10$5UTQoU4Fh6.7oHE7Qyn6VunyAwWL6FMtWV8wKDCyCNOTSy8ySlfUS'
  );