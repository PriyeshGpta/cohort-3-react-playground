import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../app/providers/AuthContextProvider";
import { toast } from "react-toastify";
import { nanoid } from 'nanoid'
import { useNavigate } from "react-router";

export const useAuth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { users, setUsers, loggedInUser, setLoggedInUser } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm({
        mode: 'onChange'
    })

    const onSubmitLogin = ({ email, password }) => {
        const hasSignedUp = users.find((user) => {
            return email === user.email && password === user.password;
        })
        if (hasSignedUp) {
            const activeUser = { email, password };
            setLoggedInUser(activeUser);
            localStorage.setItem("loggedInUser", JSON.stringify(activeUser));
            navigate("/main")
            toast.success("Logged in successfully");
        } else {
            toast.error("Invalid Credentials")
        }
    }

    const onSubmitRegister = (values) => {
        const updatedUsers = [...users, { id: nanoid(), ...values }];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        toast.success("Signed up successfully");
        reset();
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev)
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
        getValues,
        onSubmitLogin,
        onSubmitRegister,
        handleShowPassword,
        handleShowConfirmPassword,
        showPassword,
        showConfirmPassword,
        handleLogout
    }
}