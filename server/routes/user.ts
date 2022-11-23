import UserController from "../controller/UserController";
import express from "express";


const userRouter = express.Router();

/**
 * Login
 * Recover email and password from client
 * test password
 * return true if ok esle return false
 */
userRouter.post('/login', async function(req, res) {
    console.log("body", req.body)
    const email: string = req.body.email
    const password: string = req.body.password
    res.send( await UserController.Login(email, password))
})

userRouter.post('/inscription', function(req, res) {
    console.log("inscription");
    res.send("inscription ");
})

userRouter.get('/test2', function(req, res) {
    console.log("test2");
    res.send("Tapez le button ");
})




export = userRouter;
