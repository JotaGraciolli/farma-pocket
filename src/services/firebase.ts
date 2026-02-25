import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtqriCZo7mpDccYRteyxa6ghYGzwjaTJQ",
  authDomain: "farma-pocket.firebaseapp.com",
  projectId: "farma-pocket",
  storageBucket: "farma-pocket.firebasestorage.app",
  messagingSenderId: "377280352546",
  appId: "1:377280352546:web:64b2e92ac3670ba024157b",
  measurementId: "G-MC8DM1MKF9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);