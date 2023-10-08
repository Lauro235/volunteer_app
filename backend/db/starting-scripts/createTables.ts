import { pool } from "../db_connection/connect";

async function createTables() {
  pool.query(`
  DROP TABLE IF EXISTS roles, bookings CASCADE;

  DROP TABLE IF EXISTS role_types, users, sessions, attendance_types, time_keeping_types, booking_events CASCADE;

  CREATE TABLE IF NOT EXISTS role_types (
    id INT GENERATED ALWAYS AS IDENTITY,
    type VARCHAR(10),
    CONSTRAINT role_key PRIMARY KEY (id)
  );
  
  CREATE TABLE IF NOT EXISTS users (
  	id INT GENERATED ALWAYS AS IDENTITY,
  	first_name VARCHAR(100),
    surname VARCHAR(100),
    email_address VARCHAR(100),
    role_id INT NOT NULL REFERENCES role_types (id),
    CONSTRAINT user_key PRIMARY KEY (id)
);
  
CREATE TABLE IF NOT EXISTS attendance_types (
	id INT GENERATED ALWAYS AS IDENTITY,
	type VARCHAR(15),
	CONSTRAINT attendance_key PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS time_keeping_types (
	id INT GENERATED ALWAYS AS IDENTITY,
	type VARCHAR(10),
	CONSTRAINT time_keeping_key PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS sessions (
  id INT GENERATED ALWAYS AS IDENTITY,
  date DATE,
  slot VARCHAR(10),
  user_id INT REFERENCES users (id),
  attendance_id INT NOT NULL REFERENCES attendance_types (id),
  time_keeping_id INT NOT NULL REFERENCES time_keeping_types (id),
  CONSTRAINT session_key PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS booking_events (
	id INT GENERATED ALWAYS AS IDENTITY,
	user_id INT NOT NULL REFERENCES users (id),
	session_id INT NOT NULL REFERENCES sessions (id),
	type VARCHAR(10),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`);
}

createTables();