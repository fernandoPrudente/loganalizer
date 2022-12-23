import multer from "multer"
import { CategoryRepository } from "../../../../domain/ports/driven/CategoryRepository"
import { LogRepository } from "../../../../domain/ports/driven/LogRepository"
import { ToLogsTraductor } from "../../../../domain/ports/driven/ToLogsTraductor"
import { ExtractLogsFromExternalLogFileUserCase } from "../../../../domain/useCases/ExtractLogsFromExternalLogFileUserCase"
import asyncHandler from "../common/asyncHandler"

export const getUploadMiddleware = () => {
    const storage = multer.memoryStorage()
    const upload = multer({ storage: storage })
    return upload.single('textFile')
}

export default (categoryRepository: CategoryRepository, logRepository: LogRepository, logTraductor: ToLogsTraductor) => {
    const postFile = asyncHandler(async (req, res) => {
        const userCase = new ExtractLogsFromExternalLogFileUserCase(categoryRepository, logRepository, logTraductor)

        const categoryId = req.body.categoryId
        const contentFile = (req as any).file.buffer.toString().split(/\n|\r/g)        
        await userCase.extract(categoryId, contentFile)

        res.status(200).send()
    })

    return {
        postFile
    }
}