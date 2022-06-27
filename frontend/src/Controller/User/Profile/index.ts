import { UserProps } from "../../../@types/User";
import { api } from "../../../Services";

export async function Profile() {
    try {
        const response = await api.get<UserProps>('/user/profile')
        return response.data
    } catch (error) {
        console.log(error)
        return '';
    }
}