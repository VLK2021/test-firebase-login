import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import * as firebase from 'firebase';
import {initializApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

import App from './App';


const firebaseConfig = {
    apiKey: "AIzaSyCEYoULpK7FvbkcRStrceC-3EtawgGBOuo",
    authDomain: "test-firebase-login-ea6c5.firebaseapp.com",
    databaseURL: "https://test-firebase-login-ea6c5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-firebase-login-ea6c5",
    storageBucket: "test-firebase-login-ea6c5.appspot.com",
    messagingSenderId: "335968371906",
    appId: "1:335968371906:web:2f67af295492e6e765e75b"
}

const app = initializApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);


