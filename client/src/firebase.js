// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
  authDomain: "mern-blog-cbfb3.firebaseapp.com",
  projectId: "mern-blog-cbfb3",
  storageBucket: "mern-blog-cbfb3.appspot.com",
  messagingSenderId: "1088735478530",
  appId: "1:1088735478530:web:7ef1247ccbaecd077cf81b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);