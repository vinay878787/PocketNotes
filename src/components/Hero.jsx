import { useContext, useState, useEffect } from "react";
import { IndexContext } from "../store/IndexContext";
import styles from "./Hero.module.css";
import Message from "./Message";
import backBtn from "../../src/assets/arrow.svg"
import sendEBtn from "../../src/assets/blueSend.svg"
import sendDBtn from "../../src/assets/bSend.svg"

function Hero() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const { clickedIndex, setClickedIndex } = useContext(IndexContext);
  const windowWidth = window.innerWidth;

  const data = JSON.parse(localStorage.getItem("groups")) || [];
  let index = Number(clickedIndex);
  const groupName = capitalizeFirstLetter(data[index].groupName);
  const groupColor = data[index].groupColor;

  useEffect(() => {
    const storedMessages =
      JSON.parse(localStorage.getItem(`${groupName}-messages`)) || [];
    setMessages(storedMessages);
  }, [groupName]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const formattedTime = currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    e.preventDefault();
    if (input.trim() !== "") {
      const newMessage = {
        text: input,
        date: formattedDate,
        time: formattedTime,
      };

      setMessages([...messages, newMessage]);
      localStorage.setItem(
        `${groupName}-messages`,
        JSON.stringify([...messages, newMessage])
      );

      setInput("");
    }
  };

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const isMobile = windowWidth <= 500;
  const shouldHide = isMobile && clickedIndex === null;

  return (
    <>
      <div className={styles.container} style={{ display: shouldHide ? "none" : "" }}>
        <div className={styles.menu}>
          <div className={styles.innerContainer}>
            {isMobile && (
              <img
                src={backBtn}
                className={styles.arrow}
                onClick={() => setClickedIndex(null)}
                alt="Back"
              />
            )}
            <div
              style={{ backgroundColor: groupColor }}
              className={styles.logoContainer}
            >
              {groupName
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase())
                .join("")
                .substring(0, 2)}
            </div>
            <div className={styles.groupName}>{groupName}</div>
          </div>
        </div>

        <Message messages={messages} />

        <div className={styles.messageContainer}>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Enter Your text here ......"
              className={styles.input}
              onChange={handleChange}
              value={input}
              name="input"
            ></textarea>
            {input.length !== 0 ? (
              <img
                src={sendEBtn}
                className={styles.bsend}
                onClick={handleSubmit}
                alt="SendDisabled"
              />
            ) : (
              <img
                src={sendDBtn}
                className={styles.bsend}
                onClick={handleSubmit}
                alt="SendEnabled"
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero;
