import { Login } from "./Login";
import { Main } from "./Main";
import { Register } from "./Register";

interface PageProps {
    pages: string,
    subpages?: string
}

export const Pages = ({ pages, subpages }: PageProps): JSX.Element => {
    return (
        <div className="bg-slate-200 h-screen w-screen p-10 flex items-center justify-center">
            <div className="bg-gray-800 h-full w-3/4 rounded-lg p-5 flex justify-center">
                <div className="h-full w-full">
                    {pages === 'login' || pages === 'register' ?
                        <div className="w-full h-1/3 flex justify-center items-center">
                            <h1 className="text-center text-2xl leading-10 w-1/2 h-1/2 text-light-green">
                                Bem-vindo ao teste da Next,
                                acesse ou crie uma conta para acessar os seviços.
                            </h1>
                        </div>
                        :
                        ''
                    }
                    {pages === 'login' && <Login />}
                    {pages === 'register' && <Register />}
                    {pages === 'principal' && subpages === 'home' && <Main pages='home'/>}
                    {pages === 'principal' && subpages === 'users' && <Main pages='users'/>}
                    {pages === 'principal' && subpages === 'profile' && <Main pages='profile'/>}
                </div>
            </div>
        </div>
    );
}