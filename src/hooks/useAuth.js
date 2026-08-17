import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../app/providers/AuthContextProvider";
import { toast } from "react-toastify";
import { nanoid } from 'nanoid'
import { useNavigate } from "react-router";

export const useAuth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onChange'
    })

    const onSubmitLogin = ({ email, password }) => {
        console.log({ email, password });
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
        toast.success("Logged out successfully")
    }

    return {
        register,
        handleSubmit,
        errors,
        onSubmitLogin,
        handleShowPassword,
        showPassword,
        handleLogout
    }
}