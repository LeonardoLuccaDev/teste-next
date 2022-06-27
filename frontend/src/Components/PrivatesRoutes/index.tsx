import { Navigate, Outlet } from 'react-router-dom';
import { useGlobal } from '../../Context/Global';
import { UserProvider } from '../../Context/User';

export default function PrivateRoute() {
    const { token } = useGlobal();
    return token ? <UserProvider><Outlet /></UserProvider> : <Navigate to="/" />;
}