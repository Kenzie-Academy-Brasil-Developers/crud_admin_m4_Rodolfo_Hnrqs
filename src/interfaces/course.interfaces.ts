import { z } from "zod";
import { course, courseCreate, courseRead } from "../schemas/courses.schemas";
import { QueryResult } from "pg";

type Course = z.infer<typeof course>;
type CourseCreate = z.infer<typeof courseCreate>;
type CourseResult = QueryResult<Course>;
type CourseRead = z.infer<typeof courseRead>;

export { Course, CourseCreate, CourseResult, CourseRead };