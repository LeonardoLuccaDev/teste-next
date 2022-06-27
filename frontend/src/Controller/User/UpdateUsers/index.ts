import { UpdateUserProps } from "../../../@types/User"
import { api } from "../../../Services"

export async function UpdateUserController({ id, name, email }: UpdateUserProps) {
    try {
        const response = await api.put(`user/${id}`, {
            name: name,
            email: email
        });

        return response.data
    } catch (error) {
        console.log(error)
        return '';
    }
}