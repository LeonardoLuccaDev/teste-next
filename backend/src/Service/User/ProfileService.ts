import { ProfileProps } from "../../@types/User";
import { prisma } from "../../Prisma";

class ProfileService {
    async execute({ id }: ProfileProps) {
        try {
            const user = await prisma.user.findFirst({
                where: {
                    id: id
                }
            });

            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export { ProfileService }
