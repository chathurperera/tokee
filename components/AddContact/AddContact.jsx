import React, { useState } from "react";
import styles from "../AddContact/AddContact.module.scss";

const AddContact = ({ addContact }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(email);
    setEmail("");
    console.log("new contact added");
  };
  return (
    <div className={styles.addContact}>
      <h4>Enter the Email Address of the person you wish to chat</h4>
      <form onSubmit={handleSubmit} className={styles.inputWrap}>
        <input
          required
          type="email"
          name=""
          id=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
