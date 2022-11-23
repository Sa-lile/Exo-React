import express from "express";


const userRouter = express.Router();

/**
 * Login
 * Recover name and password from client
 * test password
 * return true if ok esle return false
 */
userRouter.post('/login', function(req, res) {
    console.log("body", req.body)
    //TODO check if user exist in the database
    // If user exist then check if password is the same as registered in the database
    let result = true
    if ( result ) {
        res.send(true);
    } else {
        res.send(false);
    }
})

userRouter.get('/test2', function(req, res) {
    console.log("test2");
    res.send("Tapez le button ");
})

userRouter.get('/test2', function(req, res) {
    console.log("test2");
    res.send("Tapez le button ");
})




export = userRouter;
