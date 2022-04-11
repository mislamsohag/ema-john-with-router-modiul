// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAltHKRtG_zFIj3NvC0FvqFg_wRfn6kFPc",
    authDomain: "ema-john-with-router-modiul.firebaseapp.com",
    projectId: "ema-john-with-router-modiul",
    storageBucket: "ema-john-with-router-modiul.appspot.com",
    messagingSenderId: "171405046551",
    appId: "1:171405046551:web:462e12679f2d6356fa7d52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(auth);
export default auth;