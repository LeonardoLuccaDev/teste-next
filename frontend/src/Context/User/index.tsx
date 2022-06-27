import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { UpdateProfileProps, UserProps } from '../../@types/User';
import { Profile } from '../../Controller/User/Profile';
import { UpdateProfileController } from '../../Controller/User/UpdateProfile';


interface IUserProviderProps {
    children: ReactNode;
}

interface UserContextData {
    user: UserProps;
    load: boolean;
    UpdateProfile: ({ email, name, password }: UpdateProfileProps) => Promise<void>
    setUser(data: UserProps): void
}

const userContext = createContext<UserContextData>(
    {} as UserContextData
);

export function UserProvider({ children }: IUserProviderProps) {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [load, setLoad] = useState(true);

    async function GetProfile() {
        const profile = await Profile()
        setUser(profile ? profile : {} as UserProps)
    }

    async function UpdateProfile({ email, name, password }: UpdateProfileProps) {
        setLoad(true);
        const profile = await UpdateProfileController({
            email:email,
            name:name,
            password:password
        });
        setUser(profile ? profile : {} as UserProps);
        setLoad(false);
    }

    useEffect(() => {
        GetProfile()
            .then(() => setLoad(false))
    }, []);

    return (
        <userContext.Provider value={{ user, load, UpdateProfile,setUser }}>
            {children}
        </userContext.Provider>
    );
}

export function useUser() {
    const context = useContext(userContext);

    return context;
}