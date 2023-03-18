import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

import './LoginStyle.css';
import {auth} from "../../firebase-config";
import {NavLink, useNavigate} from "react-router-dom";


const Login = () => {
    // const [user, setUser] = useState({});

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const navigate = useNavigate();


    const login = async (data) => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            // setUser(user);
            console.log(user);
            reset();

        } catch (error) {
            console.log(error.message);
            if (error){
                navigate('/registered')
            }
        }

    };

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser);
    //     });
    //     return () => unsubscribe();
    // }, [user]);

    const logout = async () => {
        await signOut(auth);
    };


    return (
        <div className={'login'}>
            {/*{user &&*/}
            {/*<>*/}
            {/*    <h4> User Logged In: </h4>*/}
            {/*    {user?.email}*/}
            {/*</>*/}
            {/*}*/}

            <form onSubmit={handleSubmit(login)}>
                <div className={'login-email'}>
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

                    <div className={'login-error'}>
                        {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
                    </div>
                </div>

                <div className={'login-password'}>
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

                <button className={'login-btn'}>Login</button>
            </form>

            <NavLink to={'/registered'}>
                <p>Реєстрація</p>
            </NavLink>

            <button onClick={logout}> Sign Out</button>

        </div>
    );
};

export default Login;