import React from 'react';

import './LoginFormStyle.css';


const LoginForm = () => {

    return (
        <div className={'loginForm'}>
            <form className={'form'}>
                <input type="text" placeholder={'email'}/>
                <input type="password" placeholder={'password'}/>
                <button>add</button>
            </form>
        </div>
    );
};

export default LoginForm;