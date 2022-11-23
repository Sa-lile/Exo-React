import express from "express";

const profilRouter = express.Router();

profilRouter.get('/test2', function(req, res) {
    console.log("test2");
    res.send("How are you ?");
})

profilRouter.get('/who/:id', async function(req, res) {
    console.log("id", req.params.id);
    let numero = req.query?.numero
    let test = req.query?.test
    let age = req.query?.age
    res.send( "Who are you ?");
})

profilRouter.get('/query2', async function(req, res) {
    console.log("query2", req.query);
    let firstName: string = 'John';
    let title: string = "Web Developer";
    let profil: string = `I'm ${firstName}. 
    I'm a ${title}`; 
    res.send( profil);
})

export = profilRouter;