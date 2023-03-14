import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDcTQ5SvXMtRIgcLgS-TYi64c2fduORF_M",
    authDomain: "test-firebase-login-e09a9.firebaseapp.com",
    projectId: "test-firebase-login-e09a9",
    storageBucket: "test-firebase-login-e09a9.appspot.com",
    messagingSenderId: "609739738349",
    appId: "1:609739738349:web:6bf7bb8b35c33dc1e550e4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);