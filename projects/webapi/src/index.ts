import AppConfig from "./AppConfig"
import express, { NextFunction, Request, Response } from "express"
import authRouter from "./adapters/driver/http/routers/authRouter"
import bodyParser from "body-parser"

import swaggerUi from 'swagger-ui-express'
import NonAuthenticateError from "./adapters/exceptions/NonAuthenticateError"
import DomainError from "./domain/exceptions/DomainError"
import externalLogRouter from "./adapters/driver/http/routers/externalLogRouter"

const swaggerDocument = require('../swagger.js');

const app = express() 

app.use(bodyParser.json())  
  
AppConfig().then(() => {
    console.log('all configured!')
}).catch(() => {
    console.log('erro ao configurar app.')
})

app.use('/auth', authRouter()) 
app.use('/externalLogs', externalLogRouter()) 
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)

    if(err instanceof NonAuthenticateError) {
        res.status(401)
        res.send(err.message)
        return
    } else if(err instanceof DomainError) {
        res.status(409)
        res.send(err.message)
        return
    }

    res.status(500).send('Erro desconhecido ocorreu. Contacte o nosso suporte técnico.') 
  })

app.listen(5000, () => { 
    console.log('Started! Waiting requests ... :)') 
})    