import React from 'react'
import styles from "../ContactList/ContactList.module.scss";
import userProfile from "../../assets/images/userProfile.jpg";

const UserChat = () => {
  return (
    <div className={styles.chatCard}>
        <div className={styles.chatCardImage}>
            <img src={userProfile} alt="" />
            <div></div>
        </div>
        <div className={styles.chatCardDetails}>
            <p className={styles.name}>Felecia Rower</p>
            <p className={styles.msgPreview}>I will purchase it for sure.</p>
        </div>
        <div className={styles.lastDate}>
          <span  className={styles.date}>Jul 15</span>
          <div className={styles.newMessagesCount}>10</div>
        </div>
        <div></div>
    </div>
  )
}

export default UserChat