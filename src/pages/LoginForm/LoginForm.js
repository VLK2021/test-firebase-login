import React from 'react';
import * as firebase from 'firebase';

import './LoginFormStyle.css';


const LoginForm = () => {

    const db = firebase.database();
    console.log(db);

    const submit = (e) => {
        e.preventDefault()
        e.target.email.value = '';
        e.target.password.value = '';
    }

    return (
        <div className={'loginForm'}>
            <form className={'form'} onSubmit={submit}>
                <input type="text" placeholder={'email'} name={'email'}/>
                <input type="password" placeholder={'password'} name={'password'}/>
                <button>add</button>
            </form>
        </div>
    );
};

export default LoginForm;