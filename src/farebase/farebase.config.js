// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzDranGFhYGX1OOQmy-9ArsNczDlhS_DY",
  authDomain: "react-newspaper-auth.firebaseapp.com",
  projectId: "react-newspaper-auth",
  storageBucket: "react-newspaper-auth.appspot.com",
  messagingSenderId: "209947603283",
  appId: "1:209947603283:web:278afa944655b5c827b1a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;