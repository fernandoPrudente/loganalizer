export default class NonAuthenticateError extends Error {
    constructor(message: string) {
        super(message)
    }
}