import { useState } from "react";
import { GrClose } from "react-icons/gr"
import { toast } from "react-toastify";
import { DeleteUserProps } from "../../../@types/User";
import { DeleteUserController } from "../../../Controller/User/DeleteUser";
import { useNavigate } from "react-router-dom";


export const DeleteProfileModal = ({id}: DeleteUserProps): JSX.Element => {
    const push = useNavigate();
    const [showModal, setShowModal] = useState(false);

    async function handleSubmit() {
        await DeleteUserController({
            id: id
        });
        setShowModal(!showModal)
        push('/');
        toast.success("Usuário deletado com sucesso!");
    }

    return (
        <>
            <button
                className="w-1/4 bg-super-blue mt-5 rounded-md text-white bg-super-ocean text-base tracking-wide font-semibold py-1.5 duration-200 cursor-pointer filter hover:bg-dark-ocean hover:text-super-blue"
                onClick={() => setShowModal(true)}
            >Deletar usuário</button>
            {showModal ? (
                <>
                    <div className="w-screen h-screen justify-center items-center flex fixed inset-0 z-40">
                        <div className="flex items-center justify-center h-2/5 w-1/3">
                            <div className="border-0  rounded-lg shadow-lg h-full w-full p-6 bg-white">
                                <div className="w-full flex justify-end">
                                    <GrClose className="h-5 w-5 cursor-pointer" onClick={() => setShowModal(!showModal)} />
                                </div>
                                <div className="h-full w-full flex-auto">
                                    <div className="h-full w-full flex flex-col items-center justify-center gap-9">
                                        <h1 className="w-full text-center p-1 rounded-lg text-lg font-medium">Você tem certeza que quer deletar seu usuário?</h1>
                                        <div className="w-full flex justify-center items-center gap-10">
                                            <button onClick={() => handleSubmit()} className="w-2/4 bg-light-green rounded-lg text-white text-base tracking-wide font-semibold py-1 duration-200 cursor-pointer filter hover:bg-white hover:text-light-green">Confirmar</button>
                                            <button type='button' onClick={() => setShowModal(!showModal)} className="w-2/4 bg-red-600 rounded-lg text-white text-base tracking-wide font-semibold py-1 duration-200 cursor-pointer filter hover:bg-white hover:text-red-600">Cancelar</button>
                                        </div>
                                    </div>
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


