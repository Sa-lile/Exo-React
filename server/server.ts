import express from 'express';
import dotenv from "dotenv";
import session from "express-session";
import cors from 'cors'

import router from './routes/router';
import { SessionStore } from './conf/DatabaseConf'

dotenv.config()

const app = express();

app.use(cors({
    origin: "http://www.react-tuto.local:5173",
    credentials: true,
}))

app.use(
    session({
        name: process.env.COOKIE_NAME,
        secret: process.env.COOKIE_SECRET as string,
        cookie: { maxAge: 9000000, httpOnly: true, sameSite: true, secure: process.env.PROTOCOL === "https" },
        store: SessionStore,
        resave: false,
        saveUninitialized: false,
    })
);

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/api", router)

app.listen( process.env.SERVER_PORT, function(){
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
})