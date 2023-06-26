import { client } from "../../database";

export const deleteUserFromCourseService = async (userId: string, courseId: string): Promise<void> => {
    const queryString: string = `
        UPDATE "users"
        SET active = false
        WHERE id = $1
        `;

    await client.query(queryString, [userId, courseId]);
};