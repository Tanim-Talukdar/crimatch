import React, { useState } from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showChat, setShowChat] = useState(false); // Toggle chat visibility

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      const errorMsg = { sender: 'bot', text: 'Error contacting server.' };
      setMessages(prev => [...prev, errorMsg]);
    }

    setInput('');
  };

  return (
    <>
      {/* SmartToy Icon Button */}
      {!showChat && (
        <div style={styles.iconWrapper} onClick={() => setShowChat(true)}>
          <SmartToyIcon style={styles.smartIcon} />
        </div>
      )}

      {/* Chatbox */}
      {showChat && (
        <div style={styles.chatbox} className='rounded'>
          {/* Close Button */}
          <div style={styles.closeButton} onClick={() => setShowChat(false)}>
            
            <CloseIcon />
          </div>

          <div style={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  textAlign: msg.sender === 'user' ? 'right' : 'left',
                  color: msg.sender === 'user' ? '#2196F3' : '#333',
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={styles.input}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about products..."
              style={styles.inputBox}
            />
            <button onClick={handleSend} style={styles.button}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  chatbox: {
    width: 350,
    height: 500,
    border: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial',
    background: '#f9f9f9',
    padding: '10px',
    position: 'fixed',
    bottom: '80px',
    right: '30px',
    zIndex: 1000,
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    borderRadius: '10px',
  },
  messages: {
    flex: 1,
    padding: 10,
    overflowY: 'auto',
    background: '#f9f9f9',
  },
  message: {
    margin: '5px 0',
  },
  input: {
    display: 'flex',
  },
  inputBox: {
    flex: 1,
    padding: 10,
    border: 'none',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    background: '#78ccac',
    color: 'white',
    cursor: 'pointer',
  },
  smartIcon: {
    fontSize: 40,
    color: 'white',
  },
  iconWrapper: {
    position: 'fixed',
    bottom: '20px',
    right: '30px',
    backgroundColor: '#4CAF50',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 999,
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
  closeButton: {
    textAlign: 'right',
    cursor: 'pointer',
    color: '#888',
    marginBottom: '5px',
  },
};

export default Chatbox;
