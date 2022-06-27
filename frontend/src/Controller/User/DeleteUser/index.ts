import { DeleteUserProps } from "../../../@types/User";
import { api } from "../../../Services";

export async function DeleteUserController({id} : DeleteUserProps) {
    try {
        const response = await api.delete(`/user/${id}`)
        return response.data

       } catch (error) {
           console.log(error);
           return '';
       }
}