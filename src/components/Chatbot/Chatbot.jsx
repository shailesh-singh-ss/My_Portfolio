import React, { useState, useRef, useEffect } from 'react';
import styles from "./Chatbot.module.css";
import { StartChat, GetResponse } from './model.js';
import ReactMarkdown from 'react-markdown';
import { getImageUrl } from '../../utils.js';

const ChatBotAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isInitialized, setIsInitialized] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const toggleChat = async () => {
        if (!isInitialized) {
            const response = await StartChat();
            setMessages([{ text: response, sender: 'bot' }]);
            setIsInitialized(true);
        }
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (inputMessage.trim() !== '') {
            const newMessage = { text: inputMessage, sender: 'user' };
            setMessages([...messages, newMessage]);
            setInputMessage('');

            // Get response from API
            const response = await GetResponse(inputMessage);
            const botMessage = { text: <ReactMarkdown>{response}</ReactMarkdown>, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        }
    };

    const getCurrentTime = () => {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className={styles.chatBotContainer}>
            {!isOpen && (
                <button onClick={toggleChat} className={styles.chatBotButton}>
                    <img src={getImageUrl("chat/chat_icon.png")} alt="Cursor icon" className={styles.chatIcon} />
                </button>
            )}
            {isOpen && (
                <div className={styles.chatBox}>
                    <div className={styles.chatHeader}>
                        <div className={styles.headerInfo}>
                            <h3>NeonWave Assistant</h3>
                            <span className={styles.statusIndicator}>Online</span>
                        </div>
                        <button onClick={toggleChat} className={styles.closeButton}>
                            ✕
                        </button>
                    </div>
                    <div className={styles.chatMessages}>
                        {messages.map((message, index) => (
                            <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
                                <div className={styles.messageContent}>
                                    <span>{message.text}</span>
                                    <div className={styles.messageTime}>{getCurrentTime()}</div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Type your message here..."
                            className={styles.chatInput}
                        />
                        <button type="submit" className={styles.sendButton}>
                            <img src={getImageUrl("chat/send_button.png")} alt="Send icon" className={styles.sendicon} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatBotAssistant;