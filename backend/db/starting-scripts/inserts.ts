import { pool } from "../db_connection/connect";

async function insertInto() {
  pool.query(`
  INSERT INTO roles (role_name)
  VALUES 
    ('volunteer'),
    ('manager');
	
  INSERT INTO users (first_name, surname, email_address, role_id)
  VALUES
    ('John', 'Doe', 'johndoe@example.com', 1),
    ('Jane', 'Smith', 'janesmith@example.com', 1),
    ('Michael', 'Johnson', 'michaeljohnson@example.com', 2),
    ('Sarah', 'Williams', 'sarahwilliams@example.com', 1),
    ('Robert', 'Brown', 'robertbrown@example.com', 1),
    ('Emily', 'Anderson', 'emilyanderson@example.com', 1),
    ('David', 'White', 'davidwhite@example.com', 1),
    ('Olivia', 'Moore', 'oliviamoore@example.com', 2),
    ('James', 'Lee', 'jameslee@example.com', 1),
    ('Emma', 'Taylor', 'emmataylor@example.com', 1),
    ('Liam', 'Hall', 'liamhall@example.com', 1),
    ('Sophia', 'Wright', 'sophiawright@example.com', 1),
    ('William', 'Clark', 'williamclark@example.com', 2),
    ('Grace', 'Turner', 'graceturner@example.com', 1),
    ('Benjamin', 'Scott', 'benjaminscott@example.com', 1),
    ('Ava', 'Thomas', 'avathomas@example.com', 1),
    ('Henry', 'Green', 'henrygreen@example.com', 1),
    ('Chloe', 'Evans', 'chloe.evans@example.com', 1),
    ('Aiden', 'Harris', 'aidenharris@example.com', 1),
    ('Mia', 'Robinson', 'miarobinson@example.com', 1);

INSERT INTO sessions (date, slot)
VALUES
  ('01-10-2023', 'morning'),
  ('01-10-2023', 'evening'),
  ('02-10-2023', 'morning'),
  ('02-10-2023', 'evening'),
  ('03-10-2023', 'morning'),
  ('03-10-2023', 'evening'),
  ('04-10-2023', 'morning'),
  ('04-10-2023', 'evening'),
  ('05-10-2023', 'morning'),
  ('05-10-2023', 'evening'),
  ('06-10-2023', 'morning'),
  ('06-10-2023', 'evening'),
  ('07-10-2023', 'morning'),
  ('07-10-2023', 'evening'),
  ('08-10-2023', 'morning'),
  ('08-10-2023', 'evening'),
  ('09-10-2023', 'morning'),
  ('09-10-2023', 'evening'),
  ('10-10-2023', 'morning'),
  ('10-10-2023', 'evening'),
  ('11-10-2023', 'morning'),
  ('11-10-2023', 'evening'),
  ('12-10-2023', 'morning'),
  ('12-10-2023', 'evening'),
  ('13-10-2023', 'morning'),
  ('13-10-2023', 'evening'),
  ('14-10-2023', 'morning'),
  ('14-10-2023', 'evening'),
  ('15-10-2023', 'morning'),
  ('15-10-2023', 'evening'),
  ('16-10-2023', 'morning'),
  ('16-10-2023', 'evening'),
  ('17-10-2023', 'morning'),
  ('17-10-2023', 'evening'),
  ('18-10-2023', 'morning'),
  ('18-10-2023', 'evening'),
  ('19-10-2023', 'morning'),
  ('19-10-2023', 'evening'),
  ('20-10-2023', 'morning'),
  ('20-10-2023', 'evening'),
  ('21-10-2023', 'morning'),
  ('21-10-2023', 'evening'),
  ('22-10-2023', 'morning'),
  ('22-10-2023', 'evening'),
  ('23-10-2023', 'morning'),
  ('23-10-2023', 'evening'),
  ('24-10-2023', 'morning'),
  ('24-10-2023', 'evening'),
  ('25-10-2023', 'morning'),
  ('25-10-2023', 'evening'),
  ('26-10-2023', 'morning'),
  ('26-10-2023', 'evening'),
  ('27-10-2023', 'morning'),
  ('27-10-2023', 'evening'),
  ('28-10-2023', 'morning'),
  ('28-10-2023', 'evening'),
  ('29-10-2023', 'morning'),
  ('29-10-2023', 'evening'),
  ('30-10-2023', 'morning'),
  ('30-10-2023', 'evening'),
  ('31-10-2023', 'morning'),
  ('31-10-2023', 'evening');

INSERT INTO bookings (user_id, session_id)
VALUES 
  (8, 1),
  (5, 2),
  (2, 3),
  (17, 4),
  (4, 5),
  (5, 6),
  (19, 7),
  (10, 8),
  (4, 9),
  (17, 10),
  (5, 11),
  (9, 12),
  (4, 13),
  (3, 14),
  (4, 15),
  (14, 16),
  (3, 17),
  (17, 18),
  (16, 19),
  (10, 20),
  (17, 21),
  (19, 22),
  (7, 23),
  (14, 24),
  (7, 25),
  (17, 26),
  (17, 27),
  (2, 28),
  (2, 29),
  (7, 30),
  (2, 31),
  (1, 32),
  (14, 33),
  (15, 34),
  (1, 35),
  (8, 36),
  (20, 37),
  (3, 38),
  (9, 39),
  (8, 40),
  (18, 41),
  (17, 42),
  (10, 43),
  (2, 44),
  (12, 45),
  (7, 46),
  (2, 47),
  (20, 48),
  (6, 49),
  (15, 50),
  (17, 51),
  (7, 52),
  (18, 53),
  (11, 54),
  (5, 55),
  (14, 56),
  (7, 57),
  (17, 58),
  (17, 59),
  (20, 60),
  (10, 61),
  (14, 62);
  `)
}

insertInto();