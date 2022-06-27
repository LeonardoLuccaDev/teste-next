import { ProfileProps } from "../../@types/User";
import { prisma } from "../../Prisma";

class GetUserService {
    async execute({ id }: ProfileProps) {
        try {
            const user = await prisma.user.findFirst({
                where: {
                    id: id
                },
                select: {
                    name: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true
                }
            });

            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export { GetUserService }
