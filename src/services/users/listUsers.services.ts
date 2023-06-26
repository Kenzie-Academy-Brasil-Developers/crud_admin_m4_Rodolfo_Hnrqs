import { client } from "../../database";
import { UserRead, UserResult } from "../../interfaces/users.interfaces";
import { userRead } from "../../schemas/users.schemas";

export const listAllUsers = async (): Promise<UserRead> => {
    const query: UserResult = await client.query('SELECT * FROM "users";');
    return userRead.parse(query.rows);
};