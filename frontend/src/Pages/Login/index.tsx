import { Form } from "@unform/web";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginProps } from "../../@types/User";
import { Input } from "../../Components/Input";
import { useGlobal } from "../../Context/Global";
import { SignIn } from "../../Controller/User/SignIn";

export const Login = (): JSX.Element => {
    const push = useNavigate();
    const { setToken } = useGlobal();
    const formRef = useRef(null);

    async function handleSubmit({email,password}: LoginProps) {
        if (email.length === 0) {
            toast.error('Favor inserir um e-mail válido!');
            return '';
        }
        if (password.length === 0) {
            toast.error('Favor inserir uma senha válida!');
            return '';
        }
        await SignIn({
            email: email,
            password: password
        }).then(token => {
            if (token.length === 0) {
                return ''
            } else {
                localStorage.setItem('@CRUDusers:token', token);
                setToken(token);
                push('/principal/home');
                toast.success('Login realizado com sucesso!!');
            }
        });
    }

    return (
        <div className="h-2/3 flex items-center justify-center">
            <Form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-10 items-center">
                <Input type='email' name="email" className="w-2/3 text-center p-1 rounded-lg" placeholder="Escreva seu e-mail" />
                <Input type='password' name="password" className="w-2/3 text-center p-1 rounded-lg" placeholder="Escreva sua senha" />
                <div className="w-2/3 flex justify-center items-center gap-20" >
                    <button type='submit' className="w-1/4 bg-light-green rounded-lg text-white text-base tracking-wide font-semibold py-1 duration-200 cursor-pointer filter hover:bg-white hover:text-light-green">Confirmar</button>
                    <Link to='cadastrar' className="w-1/4 bg-super-ocean text-white rounded-lg tracking-wide font-semibold py-1 text-center duration-200 hover:bg-white hover:text-super-ocean">Cadastrar</Link>
                </div>
            </Form>
        </div>
    );
}