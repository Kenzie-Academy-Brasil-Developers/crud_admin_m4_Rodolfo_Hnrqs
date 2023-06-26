import { Router } from "express";
import { sessionController } from "../controllers/session.controllers";
import validateDataMiddleware from "../middlewares/validateData.middlewares";
import { sessionSchema } from "../schemas/session.schemas";

export const sessionRouter: Router = Router();

sessionRouter.post(
    "",
    validateDataMiddleware(sessionSchema),
    sessionController
);