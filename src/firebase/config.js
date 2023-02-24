// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnK2jPnCqc1-vsGlc6dYu6Cv62-lGEVoI",
  authDomain: "wheres-od.firebaseapp.com",
  projectId: "wheres-od",
  storageBucket: "wheres-od.appspot.com",
  messagingSenderId: "335035440823",
  appId: "1:335035440823:web:3734a9d0fba8fa48fcf732"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };