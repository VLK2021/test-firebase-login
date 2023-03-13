import React from 'react';

import './LoginFormStyle.css';
import {useForm} from "react-hook-form";


const LoginForm = () => {
    const {register, handleSubmit} = useForm();

    const submit = (data) => {

    };


    return (
        <div className={'loginForm'}>
            <form onSubmit={handleSubmit(submit)}>
                <label>Login:</label>
                <input type="text" {...register('login')}/>

                <label>Password:</label>
                <input type="text" {...register('password')}/>

                <button>login</button>
            </form>
        </div>
    );
};

export default LoginForm;