// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh0UFSQXwuKuQ1Sh5dP0kPa43gRIaY9e4",
  authDomain: "whatsapp-clone-5a93d.firebaseapp.com",
  projectId: "whatsapp-clone-5a93d",
  storageBucket: "whatsapp-clone-5a93d.appspot.com",
  messagingSenderId: "1025966780140",
  appId: "1:1025966780140:web:2413b36de5927eeef7bfc9",
  measurementId: "G-0QN5C9GHW0",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
