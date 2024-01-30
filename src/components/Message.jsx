import React from 'react';
import styles from "./Message.module.css";

function Message({ messages }) {

  return (
    <div className={styles.mainContainer}>
      {messages.map((message, index) => (
        <div key={index} className={styles.container}>
          <div>{message.text}</div>
          <div className={styles.timestamp}>{message.date}&nbsp;<span className={styles.dot}>.</span>&nbsp;{message.time}</div>
        </div>
      ))}
    </div>
  );
}

export default Message;
