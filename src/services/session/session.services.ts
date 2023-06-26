import { compare } from "bcryptjs";
import { client } from "../../database";
import { AppError } from "../../../error";
import { UserResult, User } from "../../interfaces/users.interfaces";
import { SessionRequest, SessionReturn } from './../../interfaces/session.interfaces';
import { sign } from "jsonwebtoken";

export const sessionService = async (sessionData: SessionRequest): Promise<SessionReturn> => {
    const query: UserResult = await client.query(
        'SELECT * FROM "users" WHERE "email" = $1;',
        [sessionData.email]
    );

    if (query.rowCount === 0) {
        throw new AppError("Wrong email/password", 401);
    }

    const user: User = query.rows[0];
    const samePassword: boolean = await compare(sessionData.password, user.password);

    if (!samePassword) {
        throw new AppError("Wrong email/password", 401);
    }

    const token: string = sign(
        { userEmail: user.email, admin: user.admin },
        process.env.SECRET_KEY!,
        { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    );

    return { token };
};