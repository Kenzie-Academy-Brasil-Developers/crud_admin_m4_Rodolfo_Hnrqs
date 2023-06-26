import { z } from "zod";
import { QueryResult } from "pg";
import { userSchema, createUserSchema, userWithoutPassword, userRead } from "../schemas/users.schemas";

type User = z.infer<typeof userSchema>;
type UserRequest = z.infer<typeof createUserSchema>;
type UserReturn = z.infer<typeof userWithoutPassword>;
type UserResult = QueryResult<User>;
type UserRead =  z.infer<typeof userRead>;

export { User, UserRequest, UserReturn, UserResult, UserRead };