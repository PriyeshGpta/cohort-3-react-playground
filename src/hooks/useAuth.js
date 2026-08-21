import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setLoggedInUser } from "../app/redux/slices/authSlice";

export const useAuth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth.users);

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
        console.log(users)
        const hasSignedUp = users.find((user) => {
            return email === user.email && password === user.password;
        })
        if (hasSignedUp) {
            const activeUser = { email, password };
            dispatch(setLoggedInUser(activeUser))
            localStorage.setItem("loggedInUser", JSON.stringify(activeUser));
            toast.success("Logged in successfully");
        } else {
            toast.error("Invalid Credentials")
        }
    }

    const onSubmitRegister = (values) => {
        const updatedUsers = [...users, { id: nanoid(), ...values }];
        dispatch(setUsers(updatedUsers));
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
        dispatch(setLoggedInUser(null));
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