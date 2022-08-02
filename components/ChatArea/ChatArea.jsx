import React from "react";
import Image from "next/image";
import styles from "../ChatArea/ChatArea.module.scss";
import beginChat from "../../assets/images/icons8-chat.gif";
import ChatLayout from "../ChatLayout/ChatLayout";
const ChatArea = ({ selectedChat }) => {
  return (
    <div className={styles.chatArea}>
      {selectedChat === "" ? (
        <div className={styles.startChat}>
          <div className={styles.startChatImage}>
            <div className={styles.gifWrapper}>
              <Image src={beginChat} alt="" />
            </div>
            <div className={styles.startConversation}>Start Conversation </div>
          </div>
        </div>
      ) : (
        <ChatLayout selectedChat={selectedChat} />
      )}
    </div>
  );
};

export default ChatArea;
