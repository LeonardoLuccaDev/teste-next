import { useUsers } from "../../../Context/Users";
import { DeleteUserModal } from "../../Modals/DeleteUser";
import { UpdateUserModal } from "../../Modals/UpdateUser";

export const UsersTable = (): JSX.Element => {
    const { users } = useUsers();

    return (
        <table className="table-auto w-full text-center">
            <thead className="text-light-green">
                <tr>
                    <th className="w-2/6">Nome completo</th>
                    <th className="w-1/6">E-mail</th>
                    <th className="w-1/6">Data de criação</th>
                    <th className="w-1/6">Ultima atualização</th>
                    <th className="w-1/6">Edição</th>
                </tr>
            </thead>
            <tbody className="text-white">
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td className="w-1/6 border-2 p-3">{user.name}</td>
                            <td className="w-1/6 border-2 p-3">{user.email}</td>
                            <td className="w-1/6 border-2 p-3">{new Intl.DateTimeFormat('pt-BR').format(new Date(user.createdAt))}</td>
                            <td className="w-1/6 border-2 p-3">{new Intl.DateTimeFormat('pt-BR').format(new Date(user.updatedAt))}</td>
                            <td className="w-1/6 p-3">
                                <div className="flex items-center justify-center gap-6">
                                    <UpdateUserModal email={user.email} name={user.name} id={user.id} />
                                    <DeleteUserModal id={user.id} />
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}


