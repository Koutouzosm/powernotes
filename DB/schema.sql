DROP DATABASE IF EXISTS powernotes_db;
CREATE DATABASE powernotes_db;

USE powernotes_db;

CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_at DATETIME default NOW(),
  PRIMARY KEY (id)
);