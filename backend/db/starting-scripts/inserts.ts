import { pool } from "../db_connection/connect";

async function insertInto() {
  pool.query(`
  INSERT INTO role_types (type)
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

INSERT INTO attendance_types (type)
VALUES
	(''),
	('checked-in'),
	('no-show');

INSERT INTO time_keeping_types (type)
VALUES 
	(''),
	('on-time'),
	('late');

INSERT INTO sessions (date, slot, user_id, attendance_id, time_keeping_id) 
VALUES
	('01-11-2023', 'morning', 1, 1, 1),
	('01-11-2023', 'evening', NULL, 1, 1),
	('02-11-2023', 'morning', 5, 1, 1);

	INSERT INTO booking_events (user_id, session_id, type)
	VALUES
		(1,1,'booked'),
		(1,2,'booked'),
		(1,2,'cancelled'),
		(5,3,'booked');	
	
  `)
}

insertInto();