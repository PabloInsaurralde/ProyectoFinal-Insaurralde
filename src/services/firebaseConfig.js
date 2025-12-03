import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF1r51aos-7ubHWXwqvHhvBsQM-FMW3d4",
  authDomain: "kinelab-academy.firebaseapp.com",
  projectId: "kinelab-academy",
  storageBucket: "kinelab-academy.firebasestorage.app",
  messagingSenderId: "108874455526",
  appId: "1:108874455526:web:5b7e39412ae29ec75dde27"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
