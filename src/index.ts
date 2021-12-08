// import { StatusCodes } from 'http-status-codes'
import express, { Request, Response } from "express";
import { Connection, createConnection } from "typeorm";

import { globalErrors } from "./middlewares/globalErrors";
import routes from "./routes";

createConnection().then(connection =>{
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    
    
    app.get('/', (req: Request, res: Response) =>{
        res.send({name: 'leonardo', age: 27})
    })
    
    app.use(routes)
    
    app.use(globalErrors)
    
    app.listen(8000, () =>{
        console.log('Servidor rodando. http://localhost:8000')
    })
}).catch((error) =>{
    console.log('Perda de conexão com o  banco de dados', error)
})

