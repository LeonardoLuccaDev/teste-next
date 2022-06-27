import { UsersProps } from "../../../@types/User";
import { api } from "../../../Services";

export async function GetUsersController() {
    try {
        const response = await api.get<UsersProps[]>('/user/')
        return response.data
    } catch (error) {
        console.log(error);
        return '';
    }
}