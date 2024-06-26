// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyADIVT6_5aePNWQso_1WMZJ323DX8baKdA",
  authDomain: "web-chat-f7538.firebaseapp.com",
  projectId: "web-chat-f7538",
  storageBucket: "web-chat-f7538.appspot.com",
  messagingSenderId: "14253507646",
  appId: "1:14253507646:web:e71090c0cdec225e77fd6f"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const dB = getFirestore();
export const myStorage = getStorage();