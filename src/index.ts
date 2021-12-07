// import { StatusCodes } from 'http-status-codes'
import express, { Request, Response } from "express";

const app = express()


app.get('/', (req: Request, res: Response) =>{
    res.send({name: 'leonardo', age: 27})
})

app.listen(5000, () =>{
    console.log('Servidor rodando. http://localhost:5000')
})