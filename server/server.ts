import express from 'express';
import router from './routes/router';
import cors from 'cors'

const app = express();

app.use(cors({
    origin: "http://www.react-tuto.local:5173"
}))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/api", router)

app.listen(3001, function(){
    console.log("Server running on port 3001");
})