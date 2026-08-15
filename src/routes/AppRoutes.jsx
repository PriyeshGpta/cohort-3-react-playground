import { createBrowserRouter, RouterProvider } from "react-router";
import PublicLayout from "../layouts/PublicLayout";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import PrivateLayout from '../layouts/PrivateLayout';
import Home from '../pages/private/Home';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import About from "../pages/private/About";
import Services from "../pages/private/Services";
import ContactUs from "../pages/private/ContactUs";

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
                        element: <Home />
                    },
                    {
                        path: "about",
                        element: <About />
                    },
                    {
                        path: "services",
                        element: <Services />
                    },
                    {
                        path: "contact",
                        element: <ContactUs />
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