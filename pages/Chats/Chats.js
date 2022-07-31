import React, { useEffect, useState } from "react";
// import "../App.scss";
import userProfile from "../../public/userProfile.jpg";
import demoPP4 from "../../assets/images/demoPP4.png";
import demoPP3 from "../../assets/images/demoPP3.png";
import demoPP2 from "../../assets/images/demoPP2.png";
import powerOff from "../../assets/images/power-off.png";
import addNewUser from "../../assets/images/addNewUser.png";
import ChatArea from "../../components/ChatArea/ChatArea";
import ChatsList from "../../components/ChatsList/ChatsList";
import ContactList from "../../components/ContactList/ContactList";
import styles from "../../components/ContactList/ContactList.module.scss";
import AddContact from "../../components/AddContact/AddContact";
import { db, auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { doc, setDoc, collection, query, where } from "firebase/firestore";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const Chats = () => {
  const user = auth.currentUser;
  const [showAddUser, setShowAddUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLogOutBox, setShowLogOutBox] = useState(false);
  const [selectedChat, setSelectedChat] = useState({});
  const [contacts, setContacts] = useState([
    {
      name: "Felecia Rower",
      imageURL: userProfile,
      bio: "Hi there, im using Chatmore 😉🤞",
    },
    {
      name: "Joaquina Weisenborn",
      imageURL: demoPP2,
      bio: "Hi there, im using Chatmore 😉🤞",
    },
    {
      name: "Verla Morgano",
      imageURL: demoPP3,
      bio: "Hi there, im using Chatmore 😉🤞",
    },
    {
      name: "Sal Piggee",
      imageURL: demoPP4,
      bio: "Hi there, im using Chatmore 😉🤞",
    },
  ]);

  const userChatRef = query(
    collection(db, "chats"),
    where("users", "array-contains", user.email)
  );
  const [chatsSnapshot] = useCollection(userChatRef);
  console.log('chatsSnapshot from chats page' , chatsSnapshot);

  const addContact = async (newContactEmail) => {
    if (
      newContactEmail === "" &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      console.log("is empty");
      return;
    }
    await setDoc(doc(db, "chats", newContactEmail), {
      users: [user.email, newContactEmail],
    }).then((res) => {
      console.log("new contact created Chats");
    });
  };

  const logout = () => {
    setShowLogOutBox(false);
    signOut(auth);
    // navigate("/login");
  };

  const chatAlreadyExists = (recipientEmail) => {
    return !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );
  };

  return (
    <main>
      <aside>
        <div className={styles.contactListHeader}>
          <div className={styles.userImage}>
            <div
              className={styles.pp}
              onClick={() => setShowLogOutBox((prevState) => !prevState)}
            >
              <Image src={userProfile} alt="user profile" />
            </div>
            <div className={styles.onlineDot}></div>
            {showLogOutBox && (
              <div className={styles.logOut}>
                <p onClick={logout}>
                  <Image src={powerOff} alt="log out" />
                  Sign out
                </p>
              </div>
            )}
          </div>
          <div className={styles.search}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b9b9c3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.addContact}>
            <Image
              objectFit="contain"
              layout="responsive"
              src={addNewUser}
              onClick={() => setShowAddUser((prevState) => !prevState)}
              alt="add new user"
            />
          </div>
        </div>
        <div className="sidebar-container">
          {showAddUser && <AddContact addContact={addContact} />}
          <ChatsList setSelectedChat={setSelectedChat} />
          <ContactList
            contacts={contacts}
            setSelectedChat={setSelectedChat}
            chatsSnapshot={chatsSnapshot}
          />
        </div>
      </aside>
      <div className="chat-area">
        <ChatArea selectedChat={selectedChat} />
      </div>
    </main>
  );
};

export default Chats;
