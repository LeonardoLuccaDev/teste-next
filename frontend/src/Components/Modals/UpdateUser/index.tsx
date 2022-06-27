import { Form } from "@unform/web";
import { useRef, useState } from "react";
import { Input } from "../../Input";
import { GrClose } from "react-icons/gr"
import { BsFillPencilFill } from "react-icons/bs"
import { UpdateUserProps } from "../../../@types/User";
import { toast } from "react-toastify";
import { useUsers } from "../../../Context/Users";
import { useUser } from "../../../Context/User";

interface UpdateUserModalProps {
    id: string,
    name: string,
    email: string
}

export const UpdateUserModal = ({ email, id, name }: UpdateUserModalProps): JSX.Element => {
    const { UpdateUser } = useUsers();
    const { user, setUser } = useUser();
    const formRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    async function handleSubmit({ email, name }: UpdateUserProps) {
        if (name.length === 0) {
            toast.error("favor inserir um nome válido");
            return '';
        }
        if (email.length === 0) {
            toast.error("favor inserir um email válido");
            return '';
        }
        if (user.id === id) {
            await UpdateUser({
                id: id,
                email: email,
                name: name
            })
            setUser({
                id: user.id,
                name: name,
                email: email,
                createdAt: user.createdAt,
                password: user.password,
                updatedAt: user.updatedAt
            });
        }
        await UpdateUser({
            id: id,
            email: email,
            name: name
        });
        setShowModal(!showModal)
        toast.success("Usuário alterado com sucesso!");
    }

    return (
        <>
            <BsFillPencilFill onClick={() => setShowModal(true)} className="w-5 h-5 cursor-pointer" />
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
                                        <Input name="name" className="w-full text-center p-1 rounded-lg bg-slate-300 text-black" defaultValue={name} />
                                        <Input type='email' name="email" className="w-full text-center p-1 rounded-lg bg-slate-300 text-black" defaultValue={email} />
                                        <div className="w-full flex justify-center items-center gap-10">
                                            <button type='submit' className="w-2/4 bg-light-green rounded-lg text-white text-base tracking-wide font-semibold py-1 duration-200 cursor-pointer filter hover:bg-white hover:text-light-green">Atualizar</button>
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


