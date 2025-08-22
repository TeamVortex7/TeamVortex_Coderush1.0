// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7EO0mu4qHCoXMQpL6ofXGn7-do9pawGU",
  authDomain: "teamvortex-auth-project.firebaseapp.com",
  projectId: "teamvortex-auth-project",
  storageBucket: "teamvortex-auth-project.firebasestorage.app",
  messagingSenderId: "105311199304",
  appId: "1:105311199304:web:0921f1a28bd1f38c4f787d",
  measurementId: "G-D44XLY79PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();