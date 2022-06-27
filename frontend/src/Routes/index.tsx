import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../Components/PrivatesRoutes';
import { Pages } from '../Pages';

export function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pages pages='login' />} />
                <Route path="/cadastrar" element={<Pages pages='register' />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/principal/home" element={<Pages pages='principal' subpages='home' />} />
                    <Route path="/principal/usuarios" element={<Pages pages='principal' subpages='users' />} />
                    <Route path="/principal/perfil" element={<Pages pages='principal' subpages='profile' />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
