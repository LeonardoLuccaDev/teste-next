import { DeleteUserProps } from "../../@types/User";
import { prisma } from "../../Prisma";

class DeleteUserService {
    async execute({ id }: DeleteUserProps) {
        const user = await prisma.user.delete({
            where: {
                id: id,
            }
        });

        if(!user){
            throw new Error("User doesn't exist!!");
        }

        return user;
    }
}

export { DeleteUserService }
