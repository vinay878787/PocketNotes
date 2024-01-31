import backgroundImage from "../assets/books.svg"
import lockImg from "../assets/lock.svg"
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.container}>
      <img src={backgroundImage} className={styles.bookImg}></img>

      <h1 className={styles.mainHeading}>Pocket Notes</h1>

      <p className={styles.description}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>

      <div className={styles.lockMsg}>
        <img src={lockImg} className={styles.lockImg}></img>
        <span className={styles.endMsg}>end-to-end encrypted</span>
      </div>
    </div>
  );
}

export default Welcome;
