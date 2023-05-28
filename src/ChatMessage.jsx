import React from 'react';

const ChatMessage = ({ message }) => {
  const { text, sender, timestamp } = message;

  return (
    <div className="chat-message">
      <div className="avatar">{sender[0]}</div>
      <div className="message-content">
        <div className="sender">{sender}</div>
        <div className="text">{text}</div>
      </div>
      <div className="timestamp">{timestamp}</div>
    </div>
  );
};

export default ChatMessage;
