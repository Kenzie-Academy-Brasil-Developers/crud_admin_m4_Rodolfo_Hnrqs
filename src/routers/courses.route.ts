import { validateTokenMiddleware } from './../middlewares/validateToken.middlewares';
import { Router } from "express";
import { courseCreate } from "../schemas/courses.schemas";
import { addUserToCourseController, createCourseController, deleteUserFromCourseController, readCoursesController } from "../controllers/courses.controllers";
import validateDataMiddleware from "../middlewares/validateData.middlewares";
import validateAdmin from '../middlewares/validateAdmin.middlewares';

const coursesRouter: Router = Router();

coursesRouter.post("", validateDataMiddleware(courseCreate), validateTokenMiddleware, validateAdmin, createCourseController);

coursesRouter.get("", validateTokenMiddleware, validateAdmin, readCoursesController);

coursesRouter.post("/:courseId/users/:userId", validateTokenMiddleware, validateAdmin, addUserToCourseController);

coursesRouter.delete("/:courseId/users/:userId", validateTokenMiddleware, validateAdmin, deleteUserFromCourseController);

export default coursesRouter;