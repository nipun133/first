// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLTmVfr3sDbxqppRRMT924rSfBYqdTzK8",
  authDomain: "first-694cd.firebaseapp.com",
  projectId: "first-694cd",
  storageBucket: "first-694cd.appspot.com",
  messagingSenderId: "579518633635",
  appId: "1:579518633635:web:0665aca61560a31e8b9116",
  measurementId: "G-9BHN5VW5GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export{auth,db};