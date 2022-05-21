import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDB2jwTLBYk9vqf3B_0IfatCbiCMRTYCrk",
    authDomain: "word-store-mongo.firebaseapp.com",
    projectId: "word-store-mongo",
    storageBucket: "word-store-mongo.appspot.com",
    messagingSenderId: "85744182976",
    appId: "1:85744182976:web:1025325dca6512e9756f25",
    measurementId: "G-PD870RFGPM"
});

export const auth = getAuth(firebaseApp);