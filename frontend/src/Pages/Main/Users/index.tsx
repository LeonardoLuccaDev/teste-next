import { Loading } from "../../../Components/Loading";
import { CreateUserModal } from "../../../Components/Modals/CreateUser";
import { UsersTable } from "../../../Components/Tables/Users";
import { useUsers } from "../../../Context/Users";

export const Users = (): JSX.Element => {
    const { load } = useUsers();
    return (
        <>
            {
                !load ?
                    <div className="w-full h-full ">
                        <div className="w-full h-1/10 flex items-center justify-end">
                            <CreateUserModal />
                        </div>
                        <div className="w-full h-9/10 max-h-9/10 ">
                            <UsersTable/>
                        </div>
                    </div>
                    :
                    <Loading />
            }
        </>
    );
}