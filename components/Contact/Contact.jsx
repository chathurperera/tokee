import React from "react";
import styles from "../ContactList/ContactList.module.scss";
import profileuser from "../../assets/images/profileuser.png";
import Image from "next/image";
import getRecipientEmail from "../../utils/getRecipientEmailAddress";
import { auth, db } from "../../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { doc, setDoc, collection, query, where } from "firebase/firestore";

const Contact = ({ contact, setSelectedChat, id, users }) => {
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, user);
  const recipientEmailRef = query(
    collection(db, "users"),
    where("email", "==", getRecipientEmail(users, user))
  );

  const [recipientSnapShot] = useCollection(recipientEmailRef);
  const recipient = recipientSnapShot?.docs?.[0]?.data();

  const bgColorList = [
    "#c2a36e",
    "#403118",
    "#1d4a5c",
    "#80949c",
    "#100829",
    "#95cc27",
  ];
  const getRandomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length + 1)];
  };
  return (
    <div className={styles.chatCard} onClick={() => setSelectedChat(contact)}>
      <div className={styles.chatCardImage} style={{ backgroundColor: getRandomColor(bgColorList) }}>
        {recipient?.photoURL ? (
          <Image src={recipient?.photoURL} alt="profile image" />
        ) : (
          <h4>{recipientEmail[0]}</h4>
        )}
      </div>
      <div className={styles.chatCardDetails}>
        <p className={styles.name}>{recipientEmail}</p>
        <p className={styles.msgPreview}>
          {contact.bio || "Hi there im using tolkeee"}
        </p>
      </div>
    </div>
  );
};

export default Contact;
