import format from "pg-format";
import { Course, CourseCreate, CourseRead, CourseResult } from "../../interfaces/course.interfaces";
import { client } from "../../database";
import { QueryResult } from "pg";
import { AppError } from "../../../error";

const createNewCourse = async (courseData: CourseCreate): Promise<Course> => {
    const queryFormat: string = format(
        'INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;',
        Object.keys(courseData),
        Object.values(courseData)
    );

    const queryResult: CourseResult = await client.query(queryFormat);
    return queryResult.rows[0];
};

const readCourses = async (admin: boolean) => {
    if (admin) {
        const queryString: string = `
            SELECT *
            FROM "courses";
        `;

        const query: any = await client.query(queryString);

        return query.rows;
    }
};

export { createNewCourse, readCourses };