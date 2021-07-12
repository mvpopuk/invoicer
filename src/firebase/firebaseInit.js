import firebase from "firebase/app";
import "firebase/firestore";

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0UOV04TIrPsSGh6bjJq-Y6MXKvvaKHao",
    authDomain: "invoicer-2cf57.firebaseapp.com",
    projectId: "invoicer-2cf57",
    storageBucket: "invoicer-2cf57.appspot.com",
    messagingSenderId: "1080173950171",
    appId: "1:1080173950171:web:b7c08c4ecd7cdd24f488fe"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
