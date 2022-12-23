import User from "../../entities/User"

export interface AutenticateUser {
    authenticate(email: string, password: string): Promise<User>
}