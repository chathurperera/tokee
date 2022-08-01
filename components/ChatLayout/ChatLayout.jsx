import React from "react";
import styles from "../ChatLayout/ChatLayout.module.scss";
import profileImage from "../../assets/images/demoPP2.png";
import video from "../../assets/images/video.png";
import search from "../../assets/images/search.png";
import dots from "../../assets/images/dots.png";
import phone from "../../assets/images/phone.png";
import sendMessage from "../../assets/images/send-message.png";
import attachment from "../../assets/images/attachment.png";
import Image from "next/image";

const ChatLayout = ({ selectedChat }) => {
  return (
    <div className={styles.chatLayout}>
      <div className={styles.chatLayoutHeader}>
        <div className={styles.profileImage}>
          <div className={styles.profileImageWrapper}>
            <Image src={profileImage} alt="profile image" />
          </div>
          <span className={styles.onlineIndicator}></span>
          <p>{selectedChat}</p>
        </div>
        <div className={styles.icons}>
          <div className={styles.iconsWrapper}>
            <Image src={phone} alt="phone icon" />
          </div>
          <div className={styles.iconsWrapper}>
            <Image src={video} alt="video icon" />
          </div>
          <div className={styles.iconsWrapper}>
            <Image src={search} alt="search icon" />
          </div>
          <div className={styles.iconsWrapper}>
            <Image src={dots} alt="dots icon" />
          </div>
        </div>
      </div>
      <div className={styles.chatWindow}>
        <h1>ss</h1>
      </div>
      <div className={styles.messagingArea}>
        <div>
          <Image
            className={styles.attachmentIcon}
            src={attachment}
            alt="attachment"
          />
        </div>
        <input type="text" name="" placeholder="Enter your message" id="" />
        <div>
        <Image src={sendMessage} alt="send message icon" />

        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
