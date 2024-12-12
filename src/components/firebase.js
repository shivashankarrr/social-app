// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqk6cGkkOaPBFPkrygTeZHnOh0YkVP2C8",
  authDomain: "social-313e0.firebaseapp.com",
  projectId: "social-313e0",
  storageBucket: "social-313e0.firebasestorage.app",
  messagingSenderId: "1069110635546",
  appId: "1:1069110635546:web:78411ec455c9f48ba975a3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app
export const db = getFirestore(app)