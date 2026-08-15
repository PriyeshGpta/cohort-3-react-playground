import { createBrowserRouter, RouterProvider } from "react-router";
import PublicLayout from "../layouts/PublicLayout";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import PrivateLayout from '../layouts/PrivateLayout';
import Dashboard from '../pages/private/Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute />,
        children: [
            {
                path: "",
                element: <PublicLayout />,
                children: [
                    {
                        path: "",
                        element: <Login />
                    },
                    {
                        path: "register",
                        element: <Register />
                    }
                ]
            },
        ],
    },
    {
        path: "/main",
        element: <PrivateRoute />,
        children: [
            {
                path: "",
                element: <PrivateLayout />,
                children: [
                    {
                        path: "",
                        elements: <Dashboard />
                    }
                ]
            },
        ],
    }
])

const AppRoutes = () => {
    return <RouterProvider router={router} />
}

export default AppRoutes