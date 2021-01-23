DROP DATABASE IF EXISTS project_3_local;
CREATE DATABASE project_3_local;

REATE TABLE mentor_table (
	id INT AUTO_INCREMENT,
    mentor_name VARCHAR (30),
    email VARCHAR(30) NOT NULL,
    age  VARCHAR(30) NOT NULL,
    gender boolean
);

  CREATE TABLE rookie_table (
	id INT AUTO_INCREMENT,
    rookie_name VARCHAR (30),
    email VARCHAR(30) NOT NULL,
    age  VARCHAR(30) NOT NULL,
    gender boolean

    );

    CREATE TABLE review_ratings (
  id INT(10) unsigned NOT NULL AUTO_INCREMENT,
  helpful INT(1) unsigned NOT NULL,
  date_entered timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DROP DATABASE IF EXISTS card_db;
CREATE DATABASE card_db;
USE card_db;

CREATE TABLE card_info (
  id int AUTO_INCREMENT,
  cvc INT NOT NULL,
  expiry_date INT NOT NULL,
  cardholder_name varchar(50) NOT NULL,
  card_number INT NOT NULL
);