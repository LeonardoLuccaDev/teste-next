import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { CreateUserProps } from "../../@types/User";
import { prisma } from "../../Prisma";

class CreateUserService {
    async execute({ name, email, password }: CreateUserProps) {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (userAlreadyExists) {
            throw new Error("User already exist!!");
        }

        const passwordHash = await hash(password, 8);

        try {
            const user = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: passwordHash
                },
                select:{
                    id: true,
                    email: true,
                    name: true,
                    createdAt: true,
                    updatedAt: true
                }
            });

            const token = sign({}, process.env.JWT_SECRET, {
                subject: user.id,
                expiresIn: "1d"
            });

            return {
                user: user,
                token: token
            };
        } catch (error) {
            throw new Error(error);
        }
    }
}

export { CreateUserService }