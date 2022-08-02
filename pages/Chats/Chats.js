import React, {  useState } from "react";
import ChatArea from "../../components/ChatArea/ChatArea";
import SideBar from "../../components/SideBar/SideBar";

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState("");

  return (
    <main>
      <SideBar />
      <div className="chat-area">
        <ChatArea selectedChat={selectedChat} />
      </div>
    </main>
  );
};

export default Chats;
