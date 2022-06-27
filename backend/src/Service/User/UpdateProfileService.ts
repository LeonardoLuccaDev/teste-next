import { hash } from "bcryptjs";
import { UpdateProfileProps } from "../../@types/User";
import { prisma } from "../../Prisma";

class UpdateProfileService {
    async execute({ name, email, id, password }: UpdateProfileProps) {
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
                    email: email ?? user.email,
                    password: await hash(password ?? user.password, 8)
                }
            });

            return updatedUser;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export { UpdateProfileService }