import React, { useState } from "react";
import styles from "../ContactList/ContactList.module.scss";
import UserChat from "../UserChat/UserChat";

export const ChatsList = ({selectedChat,setSelectedChat}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.chatsList}>
      <div className={styles.contactListBody}>
        <h3>Chats</h3>
        <UserChat setSelectedChat={setSelectedChat} />
        <UserChat setSelectedChat={setSelectedChat} />
        <UserChat setSelectedChat={setSelectedChat} />
      </div>
    </div>
  );
};

export const MemoizedChatsList = React.memo(ChatsList);
