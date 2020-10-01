import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4nPmDdItHpugtrKxi18POyYt5QDr1y1g",
    authDomain: "instagram-clone-ebc76.firebaseapp.com",
    databaseURL: "https://instagram-clone-ebc76.firebaseio.com",
    projectId: "instagram-clone-ebc76",
    storageBucket: "instagram-clone-ebc76.appspot.com",
    messagingSenderId: "453096500808",
    appId: "1:453096500808:web:6942e9c60bb796472a727d",
    measurementId: "G-0JG0CFLFPX"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};