import express, from "express";
import controllers from ".controller/controller.js"

const aplicacao = express()
const port = 3000

aplicacao.use(express.json())

controllers(aplicacao, data)
