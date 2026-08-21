import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    if (!loggedInUser) return <Navigate to={"/"} />
    return <Outlet />
}

export default PrivateRoute