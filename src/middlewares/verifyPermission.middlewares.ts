import { NextFunction, Request, Response } from "express";
import { AppError } from "../../error";

const verifyUserPermission = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req.params;
    const { sub, admin } = res.locals.decoded;

    if (!admin) {
        throw new AppError("Insufficient permission", 403);
    };

    if (userId !== sub) {
        throw new AppError("Insufficient permission", 403);
    }

    return next();
};

export default verifyUserPermission;