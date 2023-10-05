import { pool } from "../db_connection/connect";

async function createTables() {
  pool.query(`
  DROP TABLE IF EXISTS roles, users, sessions, bookings CASCADE;

  CREATE TABLE IF NOT EXISTS roles (
    id INT GENERATED ALWAYS AS IDENTITY,
    role_name VARCHAR(10),
    CONSTRAINT role_key PRIMARY KEY (id)
  );
  
  CREATE TABLE IF NOT EXISTS users (
  	id INT GENERATED ALWAYS AS IDENTITY,
  	first_name VARCHAR(100),
    surname VARCHAR(100),
    email_address VARCHAR(100),
    role_id INT REFERENCES roles (id),
    CONSTRAINT user_key PRIMARY KEY (id)
  );
  
  CREATE TABLE IF NOT EXISTS sessions (
  	id INT GENERATED ALWAYS AS IDENTITY,
    date DATE,
    slot VARCHAR(10),
    CONSTRAINT session_key PRIMARY KEY (id)
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT REFERENCES users (id),
    session_id INT REFERENCES sessions (id),
    CONSTRAINT bookings_key PRIMARY KEY (id)
  );
`);
}

createTables();