import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVFMxwvlMS-YR15zHRd6O7J6T8yBGvvl4",
  authDomain: "kinoizlovchi-c687f.firebaseapp.com",
  projectId: "kinoizlovchi-c687f",
  storageBucket: "kinoizlovchi-c687f.appspot.com",
  messagingSenderId: "1030649882430",
  appId: "1:1030649882430:web:abb94dcc34d9a51a0fee6f",
  measurementId: "G-WX8GEFBV6K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export { auth, googleProvider };
