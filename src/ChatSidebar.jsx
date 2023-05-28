import React, { useState, useEffect } from 'react';
import './ChatSidebar.css'; // CSS file for styling

const ChatSidebar = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [theme, setTheme] = useState('light');

  const handleMessageSend = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        text: inputMessage,
        timestamp: new Date().getTime(),
        sender: 'User',
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme); // Store theme in local storage
  };

  useEffect(() => {
    // Retrieve theme from local storage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <div className={`chat-sidebar ${theme}`}>
      <div className="chat-header">
        <h2>Chat</h2>
      </div>
      <div className="message-list">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <div className="avatar">{message.sender[0]}</div>
            <div className="message-content">
              <p>{message.text}</p>
              <span className="timestamp">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
      <div className="sidebar-settings">
        <h3>Settings</h3>
        <div className="theme-selector">
          <label>
            <input
              type="radio"
              value="light"
              checked={theme === 'light'}
              onChange={() => handleThemeChange('light')}
            />
            Light
          </label>
          <label>
            <input
              type="radio"
              value="dark"
              checked={theme === 'dark'}
              onChange={() => handleThemeChange('dark')}
            />
            Dark
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
