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