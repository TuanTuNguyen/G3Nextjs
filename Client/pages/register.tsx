import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signup } from '../api/user'
import { IUser } from '../models/user'
import style from '../styles/register.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormUser = {
    name: string,
    email: string,
    password: string,
    role:number
}


const Register = () => {

    const route = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormUser>()

    const onSubmit: SubmitHandler<FormUser> = async (user) => {
        const { data } = await signup(user);
        console.log(data);
        toast.success("Create Account successful")
        route.push('/login')
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form_signup}>
                <div className="mb-4">
                    <input
                        {...register("name")}
                        className={style.input_form} type="text" placeholder="Name" />
                </div>
                <div className="mb-4">

                    <input
                        {...register("email")}
                        className={style.input_form} type="text" placeholder="Email" />
                </div>
                <div className="mb-4">
                    <input
                        {...register("password")}
                        className={style.input_form} type="password" placeholder="Password" />
                </div>
                <div className={style.form__btn}>
                    <button className={style.btn_create} type="submit">
                        Create Account
                    </button>
                </div>
            </form>
         
        </div>
    )
}

export default Register