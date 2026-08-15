import { Eye, EyeOff } from 'lucide-react';
import { useAuthHook } from '../hooks/useAuthHook';
import { Link } from 'react-router';

const RegisterForm = () => {

    const { register,
        handleSubmit,
        errors,
        getValues,
        onSubmitRegister,
        showPassword,
        handleShowPassword,
        showConfirmPassword,
        handleShowConfirmPassword,
    } = useAuthHook()

    return (
        <div className='min-h-screen flex items-center justify-center px-4 py-8'>
            <form onSubmit={handleSubmit(onSubmitRegister)} className='w-full max-w-md'>
                <div className='flex flex-col gap-4 bg-slate-900 border border-slate-700 p-5 sm:p-6 rounded-2xl'>
                    <h1 className='text-2xl font-bold text-white text-center'>
                        Sign up here
                    </h1>

                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>
                            First Name
                        </label>
                        <input
                            {...register("firstName", {
                                required: "First Name is required",
                            })}
                            type='text'
                            placeholder='Enter first name...'
                            className='w-full p-2 bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-lg outline-none transition focus:border-blue-500'
                        />
                        {errors.firstName && (
                            <p className='text-red-400 text-sm mt-2'>
                                {errors.firstName.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>
                            Last Name
                        </label>
                        <input
                            {...register("lastName", {
                                required: "Last Name is required",
                            })}
                            type='text'
                            placeholder='Enter last name...'
                            className='w-full p-2 bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-lg outline-none transition focus:border-blue-500'
                        />
                        {errors.lastName && (
                            <p className='text-red-400 text-sm mt-2'>
                                {errors.lastName.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>
                            Email
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                            })}
                            type='email'
                            placeholder='Enter email...'
                            className='w-full p-2 bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-lg outline-none transition focus:border-blue-500'
                        />
                        {errors.email && (
                            <p className='text-red-400 text-sm mt-2'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>
                            Password
                        </label>
                        <div className="relative">
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder='Enter password...'
                                className='w-full p-2 pr-10 bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-lg outline-none transition focus:border-blue-500'
                            />
                            <button
                                type="button"
                                onClick={handleShowPassword}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                            >
                                {
                                    showPassword ? <EyeOff size={18} /> : <Eye size={18} />
                                }
                            </button>
                        </div>
                        {errors.password && (
                            <p className='text-red-400 text-sm mt-2'>
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: (value) =>
                                        value === getValues("password") || "Passwords do not match",
                                })}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder='Enter confirm password...'
                                className='w-full p-2 pr-10 bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-lg outline-none transition focus:border-blue-500'
                            />
                            <button
                                type="button"
                                onClick={handleShowConfirmPassword}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                            >
                                {
                                    showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />
                                }
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className='text-red-400 text-sm mt-2'>
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <button
                        type='submit'
                        className='w-full px-3 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 active:scale-98 text-white font-semibold rounded-lg transition-all cursor-pointer'
                    >
                        Register
                    </button>

                    <p className="text-white text-center text-[0.9rem]">
                        Already have an account?{" "}
                        <Link to="/" className="text-blue-500 underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm