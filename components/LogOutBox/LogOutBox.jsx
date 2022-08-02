import React from "react";
import styles from "../../components/ContactList/ContactList.module.scss";
import Image from "next/image";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

const LogOutBox = ({setShowLogOutBox}) => {
  
    const logout = () => {
    setShowLogOutBox(false);
    signOut(auth);
    // navigate("/login");
  };

  return (
    <div className={styles.logOut}>
      <p onClick={logout}>
        <Image src={powerOff} alt="log out" />
        Sign out
      </p>
    </div>
  );
};

export default LogOutBox;
