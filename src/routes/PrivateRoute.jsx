import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { UserContext } from '../app/providers/AuthProvider';

const PrivateRoute = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    if (!loggedInUser) return <Navigate to={"/"} />
    return <Outlet />
}

export default PrivateRoute