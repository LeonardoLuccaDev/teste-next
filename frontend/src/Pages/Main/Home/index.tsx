import { useUser } from "../../../Context/User";


export const Home = (): JSX.Element => {
    const { user } = useUser();
    return (
        <div className="h-full w-full p-5 flex flex-col items-center justify-center">
            <h1 className="w-2/3 font-medium text-2xl text-center text-light-green">
                Bem-vindo {user.name}
            </h1>
            <h2 className="w-1/2 text-center mt-10 text-white">
                Clique em "Usuários" ou "Meu perfil" para continuar a avaliação
            </h2>
        </div>
    );
}