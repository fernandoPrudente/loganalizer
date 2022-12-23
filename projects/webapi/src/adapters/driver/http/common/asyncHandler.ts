import { NextFunction, Request, Response } from "express"

const asyncHandler = (handler: (req: Request, res: Response) => Promise<void>) => async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    try {
        await handler(req, res)
    }catch (e) {
        next(e)
    }
}

export default asyncHandler