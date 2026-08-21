import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    if (loggedInUser) return <Navigate to={"/main"} />
    return <Outlet />
}

export default PublicRoute