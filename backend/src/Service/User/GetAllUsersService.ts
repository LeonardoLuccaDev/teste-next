import { prisma } from "../../Prisma";

class GetAllUsersService {
    async execute() {
        try {
            const users = await prisma.user.findMany();

            return users;
        } catch (error) {
            throw new Error(error);
            
        }
    }
}

export { GetAllUsersService }
