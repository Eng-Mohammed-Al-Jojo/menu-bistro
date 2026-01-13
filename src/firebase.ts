// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjyJ07eKiJ9e8F4QGwPWJu71jj4ywB1Do",
  authDomain: "bistro-menu-fa2e5.firebaseapp.com",
  databaseURL: "https://bistro-menu-fa2e5-default-rtdb.firebaseio.com",
  projectId: "bistro-menu-fa2e5",
  storageBucket: "bistro-menu-fa2e5.firebasestorage.app",
  messagingSenderId: "27283350358",
  appId: "1:27283350358:web:81c7fa8980b33961a26cf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 👇 هذا هو المهم
export const db = getDatabase(app);
export const auth = getAuth(app);
