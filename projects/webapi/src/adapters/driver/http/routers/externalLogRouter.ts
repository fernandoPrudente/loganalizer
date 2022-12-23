import express from "express";
import { CategoryStaticRepository } from "../../../driven/DB/repositories/CategoryStaticRepository";
import { LogDbRepository } from "../../../driven/DB/repositories/LogDBRepository";
import { ToLogsTraductorAdapter } from "../../../driven/ToLogTraductorAdapter";
import authMiddleware from "../common/authMiddleware";
import externalLogController, { getUploadMiddleware } from "../controllers/externalLogController";

export default () => {
    const router = express.Router()
    const controller = externalLogController(new CategoryStaticRepository(), new LogDbRepository(), new ToLogsTraductorAdapter())

    router.post('/',authMiddleware, getUploadMiddleware(), controller.postFile)

    return router     
}     
  