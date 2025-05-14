// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX7uExNJZEZc90sYUUZCjusxdHeQcgr88",
  authDomain: "suculentapp-41e48.firebaseapp.com",
  projectId: "suculentapp-41e48",
  storageBucket: "suculentapp-41e48.firebasestorage.app",
  messagingSenderId: "665315252707",
  appId: "1:665315252707:web:d5e8a438092c2beb5828d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)