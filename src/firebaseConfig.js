// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx9p5F4ZFP6qD1HY7HYN92sR6SkUrjaUU",
  authDomain: "nebula-nebulapwa-website.firebaseapp.com",
  projectId: "nebula-nebulapwa-website",
  storageBucket: "nebula-nebulapwa-website.appspot.com",
  messagingSenderId: "392748424409",
  appId: "1:392748424409:web:58beff2ece3de822b5b2c8",
  measurementId: "G-SN3XWH56Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
