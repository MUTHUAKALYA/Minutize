// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0cx0f1vtsQcWDS6ZnWKypeDRY4-R2t78",
  authDomain: "minutize-1fdf6.firebaseapp.com",
  projectId: "minutize-1fdf6",
  storageBucket: "minutize-1fdf6.appspot.com",
  messagingSenderId: "780739041998",
  appId: "1:780739041998:web:e4b976458259d1b5954e9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
console.log(app)