import { RegisterProps } from "../../../@types/User";
import { api } from "../../../Services";

export async function SignUp({ email, name, password }: RegisterProps) {
    try {
        const response = await api.post('/user/', {
            email: email,
            name: name,
            password: password
        });

        return response.data;
    } catch (error) {
        console.log(error);
        return '';
    }
}