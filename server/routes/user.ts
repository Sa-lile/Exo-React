import UserController from "../controller/UserController";
import express from "express";

declare module 'express-session' {
	interface SessionData {
        connected: boolean
	}
}

const userRouter = express.Router();

/**
 * Login
 * Recover email and password from client
 * test password
 * return true if ok esle return false
 */
userRouter.post('/login', async function(req, res) {
    const email: string = req.body.email
    const password: string = req.body.password
    let result = await UserController.Login(email, password)
    if ( result ) {
        req.session.save(function(err) {
            if ( err ) {
                res.status(500).send("Error while creating session")
            } else {
                req.session.connected = true
                res.send(true)
            }
        })
    } else {
        res.status(403).send("Connection Failed")
    }
})

userRouter.delete('/disconnect', async function(req, res) {
    req.session.destroy(function(err) {
        if ( err ) {
            res.status(500).send("Error while destroying session")
        } else {
            res.send(true)
        }
    })
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
    if ( req.session.connected ) {
        res.send( await UserController.List() )
    } else {
        res.status(401).send('You need to be connected to access this information')
    }
})



export = userRouter;
