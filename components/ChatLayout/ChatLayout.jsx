import React from "react";
import styles from "../ChatLayout/ChatLayout.module.scss";
import profileImage from "../../assets/images/demoPP2.png";
import video from "../../assets/images/video.png";
import search from "../../assets/images/search.png";
import dots from "../../assets/images/dots.png";
import phone from "../../assets/images/phone.png";
import sendMessage from "../../assets/images/send-message.png";
import attachment from "../../assets/images/attachment.png";

const ChatLayout = () => {
  return (
    <div className={styles.chatLayout}>
      <div className={styles.chatLayoutHeader}>
        <div className={styles.profileImage}>
          <img src={profileImage} alt="profile image" />
          <span className={styles.onlineIndicator}></span>
          <p>Sal Piggee</p>
        </div>
        <div className={styles.icons}>
          <img src={phone} alt="phone icon" />
          <img src={video} alt="video icon" />
          <img src={search} alt="search icon" />
          <img src={dots} alt="dots icon" />
        </div>
      </div>
      <div className={styles.chatWindow}>
        <h1>ss</h1>
      </div>
      <div className={styles.messagingArea}>
        <img className={styles.attachmentIcon} src={attachment} alt="attachment" />
        <input type="text" name="" placeholder="Enter your message" id="" />
        <img src={sendMessage} alt="send message icon" />
      </div>
    </div>
  );
};

export default ChatLayout;
