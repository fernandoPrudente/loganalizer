import { Request, Response } from "express";
import UserAuthenticateUserCase from "../../../../domain/useCases/UserAuthenticateUserCase";
import * as jwt from 'jsonwebtoken'

export default (useCase: UserAuthenticateUserCase) => {
    const auth = async (req: Request, res: Response) => {
        console.log(req.headers)
        
        const user = await useCase.authenticate(req.body?.email, req.body?.password)

        const token = jwt.sign({user, password: undefined, email: undefined}, process.env.JWT_KEY)   
 
        res.send(token)
    }

    return {
        auth
    } 
}