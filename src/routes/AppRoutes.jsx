import { Route, Routes } from "react-router";
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

const AppRoutes = () => {
    return (
        <Routes>
        /* Public Routes */
            <Route path="/" element={<PublicRoute />}>
                <Route path="" element={<PublicLayout />}>
                    <Route path="" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Route>

        /* Private Routes */
            <Route path="/main" element={<PrivateRoute />}>
                <Route path="" element={<PrivateLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contact" element={<ContactUs />} />
                </Route>
            </Route>
        </Routes>
    )

}

export default AppRoutes