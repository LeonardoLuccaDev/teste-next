import { toast } from "react-toastify";
import { LoginProps } from "../../../@types/User";
import { api } from "../../../Services";

export async function SignIn({ email, password }: LoginProps) {
    try {
        const response = await api.post('/user/login', {
            email: email,
            password: password
        });

        if(response.data.token === undefined){
            toast.error('Usuário inválido!');
            return '';
        }

        return response.data.token;
    } catch (error) {
        console.log(error);
        return '';
    }
}