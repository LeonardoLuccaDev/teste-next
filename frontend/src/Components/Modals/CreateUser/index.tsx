import { Form } from "@unform/web";
import { useRef, useState } from "react";
import { Input } from "../../Input";
import { GrClose } from "react-icons/gr"
import { IoMdPersonAdd } from "react-icons/io"
import { toast } from "react-toastify";
import { RegisterProps } from "../../../@types/User";
import { useUsers } from "../../../Context/Users";

export const CreateUserModal = (): JSX.Element => {
    const { CreateUser } = useUsers();
    const formRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    async function handleSubmit({ email, name, password }: RegisterProps) {
        if (name.length === 0) {
            toast.error("favor inserir um nome válido");
            return '';
        }
        if (email.length === 0) {
            toast.error("favor inserir um email válido");
            return '';
        }
        if (password.length === 0) {
            toast.error("favor inserir uma senha válida");
            return '';
        }
        await CreateUser({
            email: email,
            name: name,
            password: password
        });
        setShowModal(!showModal)
        toast.success("Usuário criado com sucesso!");
    }

    return (
        <>
            <IoMdPersonAdd onClick={() => setShowModal(true)} className="w-10 h-10 text-light-green cursor-pointer duration-200 hover:text-green-600"/>
            {showModal ? (
                <>
                    <div className="w-screen h-screen justify-center items-center flex fixed inset-0 z-40">
                        <div className="flex items-center justify-center h-2/4 w-1/3">
                            <div className="border-0  rounded-lg shadow-lg h-full w-full p-6 bg-white">
                                <div className="w-full flex justify-end">
                                    <GrClose className="h-5 w-5 cursor-pointer" onClick={() => setShowModal(!showModal)} />
                                </div>
                                <div className="h-full w-full flex-auto">
                                    <Form ref={formRef} onSubmit={handleSubmit} className="h-full w-full flex flex-col items-center justify-center gap-9">
                                        <Input name="name" className="w-full text-center p-1 rounded-lg bg-slate-300" placeholder="Escreva o nome completo" />
                                        <Input type='email' name="email" className="w-full text-center p-1 rounded-lg bg-slate-300" placeholder="Escreva o e-mail" />
                                        <Input type='password' name="password" className="w-full text-center p-1 rounded-lg bg-slate-300" placeholder="Escreva uma senha" />
                                        <div className="w-full flex justify-center items-center gap-10">
                                            <button type='submit' className="w-2/4 bg-light-green rounded-lg text-white text-base tracking-wide font-semibold py-1 duration-200 cursor-pointer filter hover:bg-white hover:text-light-green">Confirmar</button>
                                            <button type='button' onClick={() => setShowModal(!showModal)} className="w-2/4 bg-red-600 rounded-lg text-white text-base tracking-wide font-semibold py-1 duration-200 cursor-pointer filter hover:bg-white hover:text-red-600">Cancelar</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-30 bg-black h-screen w-screen" />
                </>
            ) : null}
        </>
    );
}


