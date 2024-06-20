import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDC8LbJI1dEwcueasBA82MaMz31ZGqL3PE",
    authDomain: "weather-app-de96a.firebaseapp.com",
    projectId: "weather-app-de96a",
    storageBucket: "weather-app-de96a.appspot.com",
    messagingSenderId: "362576305262",
    appId: "1:362576305262:web:5b757536a2cd7b85b9da7f",
    measurementId: "G-7971GXHNQ2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);
const logOut = () => signOut(auth);

export { auth, signInWithGoogle, logOut };
