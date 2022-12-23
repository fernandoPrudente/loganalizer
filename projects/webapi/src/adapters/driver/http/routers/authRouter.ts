import express from "express";
import UserAuthenticateUserCase from "../../../../domain/useCases/UserAuthenticateUserCase";
import AutenticateUserAdapter from "../../../driven/AuthenticateUserAdapter";
import asyncHandler from "../common/asyncHandler";
import authController from "../controllers/authController";

export default () => {
    const authRouter = express.Router()
    const controller = authController(new UserAuthenticateUserCase(new AutenticateUserAdapter()))

    authRouter.post('/', asyncHandler(controller.auth)) 

    return authRouter   
}
  