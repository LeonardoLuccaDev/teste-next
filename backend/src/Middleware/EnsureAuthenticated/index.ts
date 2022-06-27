import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function EnsureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            errorCode: "token inválido",
        });
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

        request.id = sub; return next();
    }

    catch (err) {
        return response.status(401).json({ errorCode: "token expirado" })
    }
}