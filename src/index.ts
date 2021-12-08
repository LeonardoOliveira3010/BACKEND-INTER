// import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'
import express from "express";
import { createConnection } from "typeorm";

import { globalErrors } from "./middlewares/globalErrors";
import routes from "./routes";

createConnection().then(connection =>{
    const app = express()
    app.use(express.json())
        
    app.use(routes)
    
    app.use(globalErrors)
    
    app.listen(8000, () =>{
        console.log('Servidor rodando. http://localhost:8000')
    })
}).catch((error) =>{
    console.log('Perda de conexão com o  banco de dados', error)
})

