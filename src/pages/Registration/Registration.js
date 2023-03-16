import React, {useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase-config";

import './RegistrationStyle.css';
import {useForm} from "react-hook-form";


const Registration = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");



    const {register, handleSubmit} = useForm();




    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);


    const reg = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        // <div>
        //         <input type="text" placeholder={'email'} onChange={(e) => {
        //         e.preventDefault();
        //         setRegisterEmail(e.target.value)
        //     }}/>
        //
        //         <input type="text" placeholder={'password'} onChange={(e) => {
        //             e.preventDefault();
        //             setRegisterPassword(e.target.value)
        //         }}/>
        //
        //         <button onClick={reg}>Register</button>
        //
        //     <h4> User Logged In: </h4>
        //     {user?.email}
        // </div>



        <div>
            <form onSubmit={handleSubmit(reg)}>
                <input type="text" {...register('email')} placeholder={'...email'}/>
                <input type="text" {...register('password')} placeholder={'...password'}/>

                <button>Register</button>
            </form>

            <h4> User Logged In: </h4>
                 {user?.email}
        </div>



    );
};

export default Registration;