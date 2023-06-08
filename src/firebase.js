import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "<REDACTED>",
    authDomain: "<REDACTED>",
    projectId: "<REDACTED>",
    storageBucket: "<REDACTED>",
    messagingSenderId: "<REDACTED>",
    appId: "<REDACTED>",
    measurementId: "<REDACTED>"
  }).auth();
