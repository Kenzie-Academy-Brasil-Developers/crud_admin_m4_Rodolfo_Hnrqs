import { client } from "../../database";

export const addUserToCourse = async (userId: string, courseId: string): Promise<Object> => {
    const queryString: string = `
    INSERT INTO "userCourses"
      ("userId", "courseId")
    VALUES ($1, $2)
    RETURNING *;
  `;

    await client.query(queryString, [userId, courseId]);

    return { message: "User successfully vinculed to course" };
};