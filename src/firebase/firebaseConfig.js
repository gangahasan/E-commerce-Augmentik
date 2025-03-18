// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYGYc0kJU-J23LdmYguCecq0N8jdCbVws",
  authDomain: "e-commerce-augmentik.firebaseapp.com",
  projectId: "e-commerce-augmentik",
  storageBucket: "e-commerce-augmentik.firebasestorage.app",
  messagingSenderId: "974339087067",
  appId: "1:974339087067:web:3c8a6906d40dd75c028afe",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);