import React, {useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import {auth} from "../../firebase-config";


const LoginForm = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

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

    const log = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);

        }catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };


    return (
        <div>
            <div className={'register'}>
                <input type="text" placeholder={'email'} onChange={(e) => {
                    e.preventDefault();
                    setRegisterEmail(e.target.value)
                }}/>

                <input type="text" placeholder={'password'} onChange={(e) => {
                    e.preventDefault();
                    setRegisterPassword(e.target.value)
                }}/>

                <button onClick={reg}>Register</button>
            </div>

            <div className={'login'}>
                <input type="text" placeholder={'email'} onChange={(e) => {
                    e.preventDefault();
                    setLoginEmail(e.target.value)
                }}/>

                <input type="text" placeholder={'password'} onChange={(e) => {
                    e.preventDefault();
                    setLoginPassword(e.target.value)
                }}/>

                <button onClick={log}>Login</button>
            </div>


            <h4> User Logged In: </h4>
            {user?.email}

            <button onClick={logout}> Sign Out </button>
        </div>
    );
};

export default LoginForm;