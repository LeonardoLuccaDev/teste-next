import { UpdateUserProps } from "../../@types/User";
import { prisma } from "../../Prisma";

class UpdateUserService {
    async execute({ name, email, id }: UpdateUserProps) {
        const user = await prisma.user.findFirst({
            where:{
                id: id
            }
        });

        if(!user){
            throw new Error("User doesn't exist!");
        }

        try {
            const updatedUser = await prisma.user.update({
                where: {
                    id: id
                },
                data:{
                    name: name ?? user.name,
                    email: email ?? user.email
                }
            });

            return updatedUser;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export { UpdateUserService }