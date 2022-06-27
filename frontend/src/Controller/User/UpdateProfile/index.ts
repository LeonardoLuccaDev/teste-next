import { UpdateProfileProps } from "../../../@types/User";
import { api } from "../../../Services"

export async function UpdateProfileController({name,email,password}: UpdateProfileProps) {
    try{
        const response = await api.put(`user/`, {
            name: name,
            email: email,
            password: password
        });
        return response.data
    } catch(error){
        console.log(error)
        return '';
    }
}