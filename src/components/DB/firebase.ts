// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7LYYB9433boYXOo8139Hi3auszoYD6EI",
    authDomain: "adogtame-2-61f3f.firebaseapp.com",
    projectId: "adogtame-2-61f3f",
    storageBucket: "adogtame-2-61f3f.appspot.com",
    messagingSenderId: "1078270042091",
    appId: "1:1078270042091:web:4a630d72e24bc664ca03ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db,
    app,
    firebaseConfig
}