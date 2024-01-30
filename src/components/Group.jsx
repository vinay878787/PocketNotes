import { useContext } from "react";
import styles from "./Group.module.css";
import { IndexContext } from "../store/IndexContext";

function Group() {
  const { clickedIndex, setClickedIndex } = useContext(IndexContext);
  const data = JSON.parse(localStorage.getItem("groups")) || [];

  console.log("clickedIndex : ", clickedIndex);

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <>
      {data.map((group, index) => (
        <div
          key={index}
          className={styles.mainContainer}
          onClick={() => setClickedIndex(index)}
        >
          <div
            className={`${styles.container} ${
              clickedIndex === index ? styles.clicked : ""
            }`}
          >
            <span
              className={styles.groupInitials}
              style={{ backgroundColor: group.groupColor }}
            >
              {capitalizeFirstLetter(
                group.groupName
                  .split(" ")
                  .map((word) => word.charAt(0))
                  .join("")
                  .substring(0, 2)
              )}
            </span>
            <span className={styles.groupName}>
              {capitalizeFirstLetter(group.groupName)}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Group;
