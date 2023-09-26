import dotenv from "dotenv";
dotenv.config();

import { Pool, Client } from 'pg'

const options = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: Number(process.env.PGPORT),
  }

 
// pools will use environment variables
// for connection information
export const pool = new Pool(options)
export const client = new Client(options)

