import { DeleteProfileModal } from "../../../Components/Modals/DeleteProfile";
import { UpdateProfileModal } from "../../../Components/Modals/UpdateProfile";
import { useUser } from "../../../Context/User";


export const Profile = (): JSX.Element => {
    const { user } = useUser();
    return (
        <div className="h-full w-full p-5 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5">
                <p className="text-center font-medium text-white text-lg">
                    Nome completo: <br /> {user.name}
                </p>
                <p className="text-center font-medium text-white text-lg mb-5">
                    E-mail: <br /> {user.email}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                <p className="text-center font-medium text-white text-lg">
                    Data de criação: <br /> {new Intl.DateTimeFormat('pt-BR').format(new Date(user.createdAt))}
                </p>
                <p className="text-center font-medium text-white text-lg">
                    Ultima atualização: <br /> {new Intl.DateTimeFormat('pt-BR').format(new Date(user.createdAt))}
                </p>
            </div>
            <div className="w-full flex items-center justify-center gap-10">
                <UpdateProfileModal />
                <DeleteProfileModal id={user.id}/>
            </div>
        </div>
    );
}