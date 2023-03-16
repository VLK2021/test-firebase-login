import React from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {auth} from "../../firebase-config";
import './RegistrationStyle.css';


const Registration = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const registration = async (data) => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            console.log(user);
            if (user) {
                alert('you registered!')
            }
            navigate('/login');
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <div className={'registration'}>
            <form onSubmit={handleSubmit(registration)}>
                <div className={'registration-email'}>
                    <label>email:</label>
                    <div>
                        <input type="text" {...register('email', {
                            required: 'Поле повинно бути заповнене',
                            minLength: {
                                value: 8,
                                message: 'мінімальна довжина імені 8 символів'
                            },
                            maxLength: {
                                value: 20,
                                message: 'максимальна довжина 20 символів'
                            },
                        })} placeholder={'...email'}/>
                    </div>

                    <div className={'registration-error'}>
                        {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
                    </div>
                </div>

                <div className={'registration-password'}>
                    <label>password:</label>
                    <div>
                        <input type="text" {...register('password', {
                            required: 'Поле повинно бути заповнене',
                            minLength: {
                                value: 6,
                                message: 'мінімальна довжина імені 6 символів'
                            },
                            maxLength: {
                                value: 20,
                                message: 'максимальна довжина 20 символів'
                            },
                        })} placeholder={'...password'}/>
                    </div>

                    <div className={'registration-error'}>
                        {errors?.password && <p>{errors?.password?.message || 'Error'}</p>}
                    </div>
                </div>

                <button className={'registration-btn'}>Register</button>
            </form>
        </div>
    );
};

export default Registration;