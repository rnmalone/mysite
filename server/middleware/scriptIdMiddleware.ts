import { NextFunction, Response, Request } from "express";

/**
 * Set the request id in response.locals so we add it to the static files
 *
 * @param id
 */
export default function scriptIdMiddleware(id: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        res.locals.scriptId = id

        next();
    }
}