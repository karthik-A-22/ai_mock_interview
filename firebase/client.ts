// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz6ektGMzQ6ur7DuVJegiLmnooH7gnXf4",
  authDomain: "intrepre.firebaseapp.com",
  projectId: "intrepre",
  storageBucket: "intrepre.firebasestorage.app",
  messagingSenderId: "192796984024",
  appId: "1:192796984024:web:c978c8f095db99c9340dad",
  measurementId: "G-5JMWHX2CRW",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
