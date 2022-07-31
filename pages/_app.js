import "../styles/globals.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase-config";
import Login from "./Login/login";
import Loading from "../components/Loading/Loading";
import { useEffect } from "react";
import firebase from "firebase/compat/app";
import { doc, setDoc } from "firebase/firestore";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    console.log('useEffect ran in Appjs')
    if (user) {
      const handleUserLogin = async () => {
        await setDoc(doc(db, "users", user.email), {
          email: user.email,
          lastSeen: Date.now(),
          photoURL: user.photoURL,
        });
      };
      handleUserLogin();
      console.log(user)
    }
  }, [user]);
  if (loading) return <Loading />;
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
