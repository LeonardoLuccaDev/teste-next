import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { UpdateUserProps, DeleteUserProps, UsersProps, RegisterProps } from "../../@types/User";
import { CreateUserController } from '../../Controller/User/CreateUser';
import { DeleteUserController } from '../../Controller/User/DeleteUser';
import { GetUsersController } from '../../Controller/User/GetUsers';
import { UpdateUserController } from '../../Controller/User/UpdateUsers';

interface IUsersProviderProps {
    children: ReactNode;
}

interface UsersContextData {
    users: UsersProps[],
    load: boolean,
    CreateUser: ({ email, name, password }: RegisterProps) => Promise<void>,
    UpdateUser: ({ id, email, name }: UpdateUserProps) => Promise<void>,
    DeleteUser: ({ id }: DeleteUserProps) => Promise<void>
}

const usersContext = createContext<UsersContextData>(
    {} as UsersContextData
);

export function UsersProvider({ children }: IUsersProviderProps) {
    const [users, setUsers] = useState<UsersProps[]>({} as UsersProps[]);
    const [load, setLoad] = useState(true);

    async function UpdateUser({ id, email, name }: UpdateUserProps) {
        setLoad(true)
        const userUpdated = await UpdateUserController({
            email: email,
            id: id,
            name: name
        });
        const usersUpdated = users.map(user => user.id !== userUpdated.id ? user : userUpdated);

        setUsers(usersUpdated);
        setLoad(false)
    }

    async function DeleteUser({ id }: DeleteUserProps) {
        setLoad(true)
        const deletedUser = await DeleteUserController({
            id: id
        });
        const usersFiltered = users.filter(user => user.id !== deletedUser.id);

        setUsers(usersFiltered)
        setLoad(false)
    }

    async function CreateUser({ email, name, password }: RegisterProps) {
        setLoad(true)
        const newUser = await CreateUserController({
            email: email,
            name: name,
            password: password
        })
        setUsers([...users, newUser.user])
        setLoad(false)
    }

    async function GetUsers() {
        await GetUsersController()
            .then(data => setUsers(data ? data : {} as UsersProps[]))
    }

    useEffect(() => {
        GetUsers()
            .then(() => setLoad(false))
    }, []);

    return (
        <usersContext.Provider value={{ users, load, UpdateUser, DeleteUser, CreateUser }}>
            {children}
        </usersContext.Provider>
    );
}

export function useUsers() {
    const context = useContext(usersContext);

    return context;
}