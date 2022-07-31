import React, { useEffect, useState } from "react";
import googleIcon from "../../assets/images/google.png";
import texting from "../../assets/images/Texting.png";
import styles from "../Login/login.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config.js";
import Spinner from "../../components/Spinner/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log('resolved')
      localStorage.setItem('user',result.user.displayName)
    });
  };
  useEffect(() => {
    console.log('useEffect ran in Login')
  },[])
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

  };
  return (
    <main className={styles.login}>
      <div className={styles.loginLeft}>
        <div className={styles.loginLeftWrapper}>
          <h4 className={styles.title}>Login</h4>
          <p className={styles.desc}>
            Enter your credentials to access your account
          </p>
          <button className={styles.loginWithGoogle} onClick={signInWithGoogle}>
            <Image src={googleIcon} alt="googleIcon" />
            Log In with Google
          </button>
          <div className={styles.divider}>
            <div></div>
            <span>or</span>
            <div></div>
          </div>
          <form>
            <div className={styles.inputControl}>
              <label>Email address</label>
              <input
                type="text"
                required
                onChange={(e) =>
                  setLoginDetails((prevDetails) => {
                    return { ...prevDetails, email: e.target.value };
                  })
                }
                placeholder="name@company.com"
              />
            </div>
            <div className={styles.inputControl}>
              <label>Password</label>
              <input type="text" required placeholder="password" />
            </div>
            <label htmlFor="rememberLogin" className={styles.rememberLogin}>
              <input
                type="checkbox"
                name=""
                id="rememberLogin"
                onChange={(e) =>
                  setLoginDetails((prevDetails) => {
                    return { ...prevDetails, password: e.target.value };
                  })
                }
              />
              Remember information
            </label>
            <button className={styles.loginButton}>
              {loading ? <Spinner /> : "Login"}
            </button>
            <p className={styles.redirect}>
              New to ChatMore ? <Link href="/signUp">Sign up</Link>{" "}
            </p>
          </form>
        </div>
      </div>
      <div className={styles.loginRight}>
        <Image src={texting} alt="texting image" />
      </div>
    </main>
  );
};

export default Login;
