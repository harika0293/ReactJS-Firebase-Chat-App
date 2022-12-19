// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIFawms5QfATdKHhB5Gb2-YIwOplMkKik",
  authDomain: "harika-chat-app.firebaseapp.com",
  projectId: "harika-chat-app",
  storageBucket: "harika-chat-app.appspot.com",
  messagingSenderId: "907190978110",
  appId: "1:907190978110:web:3b3182e1ddf81d503bb36f",
  measurementId: "G-QZ9MNKC8L6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
