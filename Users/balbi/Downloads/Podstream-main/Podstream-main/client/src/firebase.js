// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCuDmOSFLbnQqcCAR2STh6iaLh2uVdkOM",
  authDomain: "podcast-1cf9e.firebaseapp.com",
  projectId: "podcast-1cf9e",
  storageBucket: "podcast-1cf9e.firebasestorage.app",
  messagingSenderId: "921787388308",
  appId: "1:921787388308:web:21f160274e6ef7e0687f81",
  measurementId: "G-L61MB7GMJB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;