import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCv-v9odrQcG6wmvT6MMbAxrQ42pqeXw-E",
    authDomain: "clone-b1b2e.firebaseapp.com",
    databaseURL: "https://clone-b1b2e.firebaseio.com",
    projectId: "clone-b1b2e",
    storageBucket: "clone-b1b2e.appspot.com",
    messagingSenderId: "529321413134",
    appId: "1:529321413134:web:c08d0bf335c9a5aee0ca5f",
    measurementId: "G-W1BCN9PSW5"
})

const auth = firebase.auth();

export {auth};