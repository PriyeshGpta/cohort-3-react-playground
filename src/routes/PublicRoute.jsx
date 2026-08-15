import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router';
import { UserContext } from '../app/providers/AuthProvider';

const PublicRoute = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    if (loggedInUser) return <Navigate to={"/main"} />
    return <Outlet />
}

export default PublicRoute