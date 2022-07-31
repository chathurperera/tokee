import React from "react";
import styles from "../ContactList/ContactList.module.scss";
// import userProfile from "../../assets/images/demoPP.png";
import profileuser from "../../assets/images/profileuser.png";
import Image from "next/image";

const Contact = ({ contact, setSelectedChat, id }) => {
  console.log("contact from the contact card", contact);
  return (
    <div className={styles.chatCard} onClick={() => setSelectedChat(contact)}>
      <div className={styles.chatCardImage}>
        {contact.imageURL ? (
          <Image src={contact.imageURL} alt="profile image" />
        ) : (
          <Image src={profileuser} alt="profile image placeholder" />
        )}
      </div>
      <div className={styles.chatCardDetails}>
        <p className={styles.name}>{id}</p>
        <p className={styles.msgPreview}>
          {contact.bio || "Hi there im using tolkeee"}
        </p>
      </div>
    </div>
  );
};

export default Contact;
