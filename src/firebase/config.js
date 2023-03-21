import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhVxmAMRRv5TKmZeARXNbcdQSQgBo46P0",
  authDomain: "educationone-c2530.firebaseapp.com",
  projectId: "educationone-c2530",
  storageBucket: "educationone-c2530.appspot.com",
  messagingSenderId: "1061834875312",
  appId: "1:1061834875312:web:ff6dc7c2d4b2578b757675"
};


const app = initializeApp(firebaseConfig);
// Initialize Firebase
const db = getFirestore()

export { db }
