// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-b4b4e.firebaseapp.com",
  projectId: "mern-project-b4b4e",
  storageBucket: "mern-project-b4b4e.appspot.com",
  messagingSenderId: "960131297811",
  appId: "1:960131297811:web:ac053eac181abb9a1345e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);