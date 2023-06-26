import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export class AppError extends Error {
    public status: number;

    constructor(message: string, status: number = 400) {
        super(message);
        this.status = status;
    }
}

export const handleErrors = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.status).json({
            message: error.message,
        });
    }

    if (error instanceof ZodError) {
        return res.status(400).json(error.flatten().fieldErrors);
    }
    console.log(error);

    return res.status(500).json({
        message: error.message,
    });
};