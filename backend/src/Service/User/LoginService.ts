import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { LoginProps } from "../../@types/User";
import { prisma } from "../../Prisma";

class LoginService {
    async execute({ email, password }: LoginProps) {

        const isUserExist = await prisma.user.findFirst({
            where: {
                email: email
            }
        });

        if (!isUserExist) {
            throw new Error("Invalid user!!");
        }

        const match = await compare(password, isUserExist.password)

        if (!match) {
            throw new Error("Invalid password!!");
        }

        try {
            const token = sign({}, process.env.JWT_SECRET, {
                subject: isUserExist.id,
                expiresIn: "1d"
            });
    
            return { token };
        } catch (error) {
            throw new Error(error);
        }
    }
}

export { LoginService }