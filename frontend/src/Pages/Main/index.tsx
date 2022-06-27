import { Link } from "react-router-dom";
import { Loading } from "../../Components/Loading";
import { useUser } from "../../Context/User";
import { UsersProvider } from "../../Context/Users";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Users } from "./Users";

interface PageProps {
    pages: string
}

const buttons = [
    {
        index: 1,
        link: "/principal/home",
        name: "Principal",
        value: 'home'
    },
    {
        index: 2,
        link: "/principal/usuarios",
        name: "Usuários",
        value: 'users'
    },
    {
        index: 3,
        link: "/principal/perfil",
        name: "Meu perfil",
        value: 'profile'
    }
]

export const Main = ({ pages }: PageProps): JSX.Element => {
    const { load } = useUser();
    return (
        <div className="h-full w-full">
            {
                !load ?
                    <>
                        <div className="w-full h-1/10 flex items-center justify-center rounded-lg">
                            {
                                buttons.map(button => (
                                    <Link
                                        to={button.link}
                                        key={button.index}
                                        className={`w-1/3 h-full flex items-center justify-center 
                            ${pages === button.value ? "bg-dark-ocean" : "bg-super-ocean"} 
                            ${button.index === 1 && "rounded-tl-lg rounded-bl-lg"} 
                            ${button.index === 3 && "rounded-tr-lg rounded-br-lg"} 
                            font-medium text-white duration-200 hover:bg-dark-ocean`}
                                    >
                                        {button.name}
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="h-9/10 p-2">
                            {pages === 'home' && <Home />}
                            {pages === 'profile' && <Profile />}
                            {pages === 'users' && <UsersProvider><Users /></UsersProvider>}
                        </div>
                    </>
                    :
                    <Loading/>
            }
        </div>
    );
}