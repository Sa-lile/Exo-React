import mysql from 'mysql2/promise'
import dotenv from "dotenv";
import * as expressSession from 'express-session';
import expressMysqlSession from 'express-mysql-session';

dotenv.config()

const DBConf = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT as string)
}

const MySQLStore = expressMysqlSession(expressSession)
export const Database = mysql.createPool(DBConf);
export const SessionStore = new MySQLStore({}, Database );
