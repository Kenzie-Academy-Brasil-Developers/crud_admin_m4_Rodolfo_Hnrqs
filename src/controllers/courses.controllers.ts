import { Response, Request } from "express";
import { Course } from "../interfaces/course.interfaces";
import { addUserToCourse } from "../services/courses/addUserToCourse.services";
import { createNewCourse, readCourses } from "../services/courses/courses.services";
import { deleteUserFromCourseService } from "../services/courses/deleteUserFromCourse.services";

const createCourseController = async (req: Request, res: Response): Promise<Response> => {
    const newProduct = await createNewCourse(req.body);

    return res.status(201).json(newProduct);
};

const readCoursesController = async (req: Request, res: Response): Promise<Response> => {
    const { admin } = res.locals.decoded;
    const courses: Course[] = await readCourses(admin);

    return res.status(200).json(courses);
}

const addUserToCourseController = async (req: Request, res: Response): Promise<Response> => {
    const { courseId, userId } = req.params;

    const addDeveloper = await addUserToCourse(
        userId,
        courseId
    );

    return res.status(201).json(addDeveloper);
};

const deleteUserFromCourseController = async (req: Request, res: Response): Promise<Response> => {
    const { courseId, userId } = req.params;

    await deleteUserFromCourseService(userId, courseId);

    return res.status(204).json();
};

export { createCourseController, readCoursesController, addUserToCourseController, deleteUserFromCourseController };