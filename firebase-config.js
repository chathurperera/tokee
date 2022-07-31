import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_jREw29h3yJjCDHA3LfjghOtZk4wARR8",
  authDomain: "chatmore-46852.firebaseapp.com",
  projectId: "chatmore-46852",
  storageBucket: "chatmore-46852.appspot.com",
  messagingSenderId: "237710669570",
  appId: "1:237710669570:web:22b98ee550b676f4cfb41b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
