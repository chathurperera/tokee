import React, { useEffect, useState } from "react";
import styles from "../ContactList/ContactList.module.scss";
import userProfile from "../../assets/images/userProfile.jpg";
import Contact from "../Contact/Contact";

export const ContactList = ({ chatsSnapshot, contacts, setSelectedChat }) => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    console.log('UseEffect ran from ContactsList')
  },[])
  console.log('ran from ContactsList')

  return (
    <div className={styles.contactList}>
      <div className={styles.contactListBody}>
        <h3>Contacts</h3>
        {chatsSnapshot?.docs.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              id={contact.id}
              users={contact.data().users}
              setSelectedChat={setSelectedChat}
            />
          );
        })}
      </div>
    </div>
  );
};

export const MemoizedContactList = React.memo(ContactList)
