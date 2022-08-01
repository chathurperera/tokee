import React from "react";
import styles from "../ChatArea/ChatArea.module.scss";
import beginChat from "../../assets/images/icons8-chat.gif";
import ChatLayout from "../ChatLayout/ChatLayout";
const ChatArea = ({ selectedChat }) => {
  return (
    <div className={styles.chatArea}>
      {selectedChat === "" ? 
        <div className={styles.startChat}>
          <div className={styles.startChatImage}>
            <img src={beginChat} alt="" />
            <div className={styles.startConversation}>Start Conversation </div>
          </div>
        </div>
      : <ChatLayout selectedChat={selectedChat} /> }
    </div>
  );
};

export default ChatArea;
