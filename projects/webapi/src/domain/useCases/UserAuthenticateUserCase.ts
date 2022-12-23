import User from "../entities/User"
import { AutenticateUser } from "../ports/driven/AuthenticateUser"

const account = {
    email: 'teste001@loggermanager.com',
    password: '48f2886b8cadf78743da953e50f97a36' //'#1234@'
}

export default class UserAuthenticateUserCase {
    constructor(readonly authenticateUser: AutenticateUser) {

    }

    async authenticate(email: string, password: string): Promise<User> {
        return await this.authenticateUser.authenticate(email, password)
    }
}