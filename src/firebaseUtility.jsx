// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsas5YWUifoZCAjG6GxldLtRnLn58xpJY",
  authDomain: "uploadvideo-839a3.firebaseapp.com",
  projectId: "uploadvideo-839a3",
  storageBucket: "uploadvideo-839a3.appspot.com",
  messagingSenderId: "223798901994",
  appId: "1:223798901994:web:63900eda7d34bc8aba6b93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);
