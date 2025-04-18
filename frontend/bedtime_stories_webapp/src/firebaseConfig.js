import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVAEoVuSyHi2emAQpNxouAWhTQGGVgvpk",
  authDomain: "capstone-a172d.firebaseapp.com",
  projectId: "capstone-a172d",
  storageBucket: "capstone-a172d.appspot.com",
  messagingSenderId: "700041788030",
  appId: "1:700041788030:web:2f5b97d40dfe5c4fdcf62f",
  measurementId: "G-3KP1MEHG0K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
