import Modal from "./Modal";
import Group from "./Group";
import styles from "./Sidebar.module.css";
import { useContext } from "react";
import { IndexContext } from "../store/IndexContext";

function Sidebar({ openModal }) {
  const {clickedIndex} = useContext(IndexContext);
  const windowWidth = window.innerWidth;
  console.log("windowWidth", windowWidth);

  const decision = windowWidth <= 500 && clickedIndex!==null? { display: "none" } : {};

  return (
    <div className={styles.container} style={decision}>
      <h1 className={styles.heading}>Pocket Notes</h1>
      <div className={styles.innerContainer}>
        <Group />
      </div>
      <div className={styles.createBtn} onClick={openModal}>
        <span className={styles.plus}>+</span>
      </div>
    </div>
  );
}

export default Sidebar;
