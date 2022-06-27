import { GetUserProps, UsersProps } from "../../../@types/User";
import { api } from "../../../Services";

export async function GetUserController({ id }: GetUserProps) {
    try {
        const response = await api.get<UsersProps>(`/user/profile/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
        return '';
    }
}