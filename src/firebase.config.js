import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCEYoULpK7FvbkcRStrceC-3EtawgGBOuo",
    authDomain: "test-firebase-login-ea6c5.firebaseapp.com",
    databaseURL: "https://test-firebase-login-ea6c5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-firebase-login-ea6c5",
    storageBucket: "test-firebase-login-ea6c5.appspot.com",
    messagingSenderId: "335968371906",
    appId: "1:335968371906:web:2f67af295492e6e765e75b"
}


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);