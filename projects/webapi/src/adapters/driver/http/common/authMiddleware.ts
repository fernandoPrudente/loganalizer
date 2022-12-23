import { NextFunction, Request, Response } from "express"
import * as jwt from 'jsonwebtoken'

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authValue: any = req.headers?.authorization   

    try {
        var userPayload = jwt.verify(authValue.replace('Bearer ', ''), process.env.JWT_KEY) as {id: string}
        (req as any).userId = userPayload.id

        next()
    }catch(e)     {
        res.status(403)
        res.send('Não Autorizado')
    }
}

export default authMiddleware