import md5 from "md5";
import User from "../../domain/entities/User";
import { AutenticateUser } from "../../domain/ports/driven/AuthenticateUser";
import NonAuthenticateError from "../exceptions/NonAuthenticateError";

const account = {
    email: 'teste001@loggermanager.com',
    password: '48f2886b8cadf78743da953e50f97a36' //'#1234@'
}

export default class AutenticateUserAdapter implements AutenticateUser {
    async authenticate(email: string, password: string): Promise<User> {
        console.log(md5(password))

        if(email !== account.email || md5(password) !== account.password) 
            throw new NonAuthenticateError('Authenticate fail!')

        return {
            id: 'aaa-bbb-ccc-ddd',
            name: "Fernando Prudente de Matos",
            email: email
        } as User
    }
}