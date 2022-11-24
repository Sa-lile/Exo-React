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

userRouter.post('/inscription', async function(req, res) {
    console.log("body", req.body);
    const name: string = req.body.name
    const email: string = req.body.email
    const telephone: string = req.body.telephone
    const password: string = req.body.password
    const result: boolean = await UserController.Register(name, email, telephone, password)
    if ( result ) {
        res.send( true )
    } else {
        res.status(422).send( "email is already used" )
    }
})

userRouter.get('/list', async function(req, res) {
    res.send( await UserController.List() )
})



export = userRouter;
