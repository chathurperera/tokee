import React, { useState } from "react";
import styles from "../ContactList/ContactList.module.scss";
import userProfile from "../../assets/images/userProfile.jpg";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, setSelectedChat }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.contactList}>
      <div className={styles.contactListBody}>
        <h3>Contacts</h3>
        {contacts?.map((contact) => {
          return (
            <Contact contact={contact} setSelectedChat={setSelectedChat} />
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
