CREATE DATABASE hotRestaurant;
USE hotRestaurant;

CREATE TABLE reservations(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  PRIMARY KEY(id),
  name VARCHAR(100),
  phoneNumber VARCHAR(15),
  email VARCHAR (120),
  startTime DATETIME(0),
  partySize INTEGER(3)
);




INSERT INTO reservations (name, phoneNumber, email, startTime, partySize)
VALUES ("Charles", "512-459-2222", "charlie@hotmail.com", "2017-04-21 12:30:00", 12);

INSERT INTO reservations (name, phoneNumber, email, startTime, partySize)
VALUES ("Becky", "555-800-1214", "becky@goodhair.com", "2017-05-02 01:45:00", 3);

INSERT INTO reservations (name, phoneNumber, email, startTime, partySize)
VALUES ("Sarah Candy", "202-303-4004", "iwantcandy@yeahyoudo.com", "2017-12-20 02:15:00", 8);