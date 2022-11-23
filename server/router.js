import express from "express";
import express from "./home";
import express from "./accueil";


const router = express.Router();

router.get ('/', function(req, res){
    console.log('home');
    res.send("Home");

})

export default router;

