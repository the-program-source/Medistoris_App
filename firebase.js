// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEDIgMPWd19og5fXKNf5GGtuvOYFT96C0",
  authDomain: "medistoris-137d4.firebaseapp.com",
  projectId: "medistoris-137d4",
  storageBucket: "medistoris-137d4.appspot.com",
  messagingSenderId: "701397415891",
  appId: "1:701397415891:web:f779aa865e0bce6b10e126",
  measurementId: "G-6GRENENYPL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
