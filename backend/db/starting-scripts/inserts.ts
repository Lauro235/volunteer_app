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
  ('2023-10-01', 'morning'),
  ('2023-10-01', 'evening'),
  ('2023-10-02', 'morning'),
  ('2023-10-02', 'evening'),
  ('2023-10-03', 'morning'),
  ('2023-10-03', 'evening'),
  ('2023-10-04', 'morning'),
  ('2023-10-04', 'evening'),
  ('2023-10-05', 'morning'),
  ('2023-10-05', 'evening'),
  ('2023-10-06', 'morning'),
  ('2023-10-06', 'evening'),
  ('2023-10-07', 'morning'),
  ('2023-10-07', 'evening'),
  ('2023-10-08', 'morning'),
  ('2023-10-08', 'evening'),
  ('2023-10-09', 'morning'),
  ('2023-10-09', 'evening'),
  ('2023-10-10', 'morning'),
  ('2023-10-10', 'evening'),
  ('2023-10-11', 'morning'),
  ('2023-10-11', 'evening'),
  ('2023-10-12', 'morning'),
  ('2023-10-12', 'evening'),
  ('2023-10-13', 'morning'),
  ('2023-10-13', 'evening'),
  ('2023-10-14', 'morning'),
  ('2023-10-14', 'evening'),
  ('2023-10-15', 'morning'),
  ('2023-10-15', 'evening'),
  ('2023-10-16', 'morning'),
  ('2023-10-16', 'evening'),
  ('2023-10-17', 'morning'),
  ('2023-10-17', 'evening'),
  ('2023-10-18', 'morning'),
  ('2023-10-18', 'evening'),
  ('2023-10-19', 'morning'),
  ('2023-10-19', 'evening'),
  ('2023-10-20', 'morning'),
  ('2023-10-20', 'evening'),
  ('2023-10-21', 'morning'),
  ('2023-10-21', 'evening'),
  ('2023-10-22', 'morning'),
  ('2023-10-22', 'evening'),
  ('2023-10-23', 'morning'),
  ('2023-10-23', 'evening'),
  ('2023-10-24', 'morning'),
  ('2023-10-24', 'evening'),
  ('2023-10-25', 'morning'),
  ('2023-10-25', 'evening'),
  ('2023-10-26', 'morning'),
  ('2023-10-26', 'evening'),
  ('2023-10-27', 'morning'),
  ('2023-10-27', 'evening'),
  ('2023-10-28', 'morning'),
  ('2023-10-28', 'evening'),
  ('2023-10-29', 'morning'),
  ('2023-10-29', 'evening'),
  ('2023-10-30', 'morning'),
  ('2023-10-30', 'evening'),
  ('2023-10-31', 'morning'),
  ('2023-10-31', 'evening');

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