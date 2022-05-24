import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDNbTs0qewg2vkfM0gf8b8-I5UbKaabxr0",
    authDomain: "heychat-0.firebaseapp.com",
    projectId: "heychat-0",
    storageBucket: "heychat-0.appspot.com",
    messagingSenderId: "383835837038",
    appId: "1:383835837038:web:1fb981ede53d4337f50c7f",
    measurementId: "G-HFD11MCMC3"
  }).auth();