import { listUserCourses } from './../services/users/listUserCourses';
import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { listAllUsers } from '../services/users/listUsers.services';
import { UserRead } from '../interfaces/users.interfaces';

const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const newUser = await createUserService(req.body);

    return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response): Promise<Response> => {
    const allUsers: UserRead = await listAllUsers();
    return res.status(200).json(allUsers);
};

const listUserCoursesController = async (req: Request, res: Response): Promise<Response> => {
    const userCourses = await listUserCourses(req.params.id);

    return res.status(200).json(userCourses);
};

export { createUserController, listUserCoursesController, listUsersController };