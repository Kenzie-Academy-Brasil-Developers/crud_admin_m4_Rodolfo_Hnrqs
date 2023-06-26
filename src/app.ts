import { sessionRouter } from './routers/session.routes';
import "express-async-errors";
import "dotenv/config";
import { handleErrors } from './../error';
import { userRouter } from './routers/users.routes';
import express, { Application, json } from 'express';
import coursesRouter from './routers/courses.route';

const app: Application = express();
app.use(json());

app.use("/users", userRouter);

app.use("/login", sessionRouter);

app.use("/courses", coursesRouter);

app.use(handleErrors)

export default app;
