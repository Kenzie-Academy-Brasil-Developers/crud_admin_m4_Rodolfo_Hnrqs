import { validateTokenMiddleware } from './../middlewares/validateToken.middlewares';
import { Router } from "express";
import { createUserController, listUserCoursesController, listUsersController } from "../controllers/users.controllers";
import validateDataMiddleware from "../middlewares/validateData.middlewares";
import { createUserSchema } from "../schemas/users.schemas";
import validateUserEmail from '../middlewares/verifyEmail.middlewares';
import verifyUserPermission from '../middlewares/verifyPermission.middlewares';

export const userRouter: Router = Router();

userRouter.post("", validateUserEmail, validateDataMiddleware(createUserSchema), createUserController);

userRouter.get("", validateTokenMiddleware, verifyUserPermission, listUsersController);

userRouter.get("/:id/courses", validateTokenMiddleware, verifyUserPermission, listUserCoursesController);