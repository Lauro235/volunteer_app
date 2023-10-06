import dotenv from "dotenv";
dotenv.config();

import { Pool, Client } from 'pg'

const options = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: Number(process.env.PGPORT),
    statement_timeout: 5000,
    query_timeout: 10000,
  }

 
// pools will use environment variables
// for connection information
export const pool = new Pool(options)
export const client = new Client(options)

export const query = async (text: string, params?: Array<number | string>) => {
  const start = Date.now()
  const res = await pool.query(text, params)
  const duration = Date.now() - start
  console.log('executed query', { text, duration, rows: res.rowCount })
  return res
}

export const getClient = () => {
  return pool.connect()
}