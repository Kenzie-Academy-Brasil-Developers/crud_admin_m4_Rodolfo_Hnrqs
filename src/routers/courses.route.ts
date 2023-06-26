import { validateTokenMiddleware } from './../middlewares/validateToken.middlewares';
import { Router } from "express";
import { courseCreate } from "../schemas/courses.schemas";
import { addUserToCourseController, createCourseController, deleteUserFromCourseController, readCoursesController } from "../controllers/courses.controllers";
import validateDataMiddleware from "../middlewares/validateData.middlewares";

const coursesRouter: Router = Router();

coursesRouter.post("", validateDataMiddleware(courseCreate), validateTokenMiddleware, createCourseController);

coursesRouter.get("", validateTokenMiddleware, readCoursesController);

coursesRouter.post("/:courseId/users/:userId", validateTokenMiddleware, addUserToCourseController);

coursesRouter.delete("/:courseId/users/:userId", validateTokenMiddleware, deleteUserFromCourseController);

export default coursesRouter;