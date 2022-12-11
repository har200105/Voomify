import React, { useState, useEffect } from "react";
import MessagesContainer from "./MessagesContainer";
import NewMessage from "./NewMessage";
import ConversationNotChosen from "./ConversationNotChosen";
import {  useSelector } from "react-redux";
import DirectChatHeader from "./DirectChatHeader";

const getDirectChatHistory = (directChatHistory, socketId = null) => {
  if (!socketId || !directChatHistory) {
    return [];
  }

  const history = directChatHistory.find((h) => h.socketId === socketId);

  return history ? history.chatHistory : [];
};

const DirectChat = () => {
  const { activeConversation, directChatHistory } = useSelector((state)=>state);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(
      getDirectChatHistory(
        directChatHistory,
        activeConversation ? activeConversation.socketId : null
      )
    );
  }, [activeConversation, directChatHistory]);

  return (
    <div className="direct_chat_container">
      <DirectChatHeader activeConversation={activeConversation} />
      <MessagesContainer messages={messages} />
      <NewMessage />
      {!activeConversation && <ConversationNotChosen />}
    </div>
  );
};

export default DirectChat;
