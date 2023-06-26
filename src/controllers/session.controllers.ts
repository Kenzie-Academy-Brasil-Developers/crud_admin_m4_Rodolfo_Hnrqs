import { SessionReturn } from './../interfaces/session.interfaces';
import { Request, Response } from "express";
import { sessionService } from "../services/session/session.services";

export const sessionController = async (req: Request, res: Response): Promise<Response> => {
    const token: SessionReturn = await sessionService(req.body);

    return res.status(200).json({ token });
};