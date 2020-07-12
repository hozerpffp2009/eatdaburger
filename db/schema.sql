DROP DATABASE IF EXISTS eatdaburger_db;
CREATE DATABASE eatdaburger_db;
USE eatdaburger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
