import express from "express";
import controller from "./controller/controllers.js";
import data from "./database/data.js";

const aplicacao = express()
const port = 4000

aplicacao.use(express.json())

controller(aplicacao, data)

aplicacao.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})