import React, { useState, useRef } from "react";
import { useClickOutside } from "@custom-react-hooks/all";
import styles from "./Modal.module.css";

function Modal({ onClose }) {
  const modalRef = useRef(null);
  useClickOutside(modalRef, onClose);

  const [groupValues, setGroupValues] = useState([{ groupName: "", groupColor: "" }]);
    const [borderIndex ,setBorderIndex] = useState(1);
  const handleNameChange = (event, index) => {
    const { name, value } = event.target;

    setGroupValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = {
        ...updatedValues[index],
        [name]: value,
      };
      return updatedValues;
    });
  };

  function handleColorChoice(color, index) {
    setGroupValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = {
        ...updatedValues[index],
        groupColor: color,
      };
      setBorderIndex(color);
      return updatedValues;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    if (groupValues.every((value) => value.groupName && value.groupColor)) {
      const prevGroup = JSON.parse(localStorage.getItem("groups")) || [];
  
      // Check if any of the group names already exist
      const existingGroupNames = prevGroup.map((group) => group.groupName);
      const newGroupNames = groupValues.map((group) => group.groupName);
  
      if (newGroupNames.some((name) => existingGroupNames.includes(name))) {
        alert("Please provide unique Group Names");
      } else {
        const updatedGroup = [...prevGroup, ...groupValues];
  
        localStorage.setItem("groups", JSON.stringify(updatedGroup));
  
        console.log("Form submitted:", groupValues);
  
        setGroupValues((prevValues) => [
          ...prevValues,
          {
            groupName: "",
            groupColor: "",
          },
        ]);
  
        onClose();
      }
    } else {
      alert("Please provide both Group Name and Choose Colour");
    }
  }
  
  return (
    <div className={styles.overlay}>
      <div className={styles.container} ref={modalRef}>
        <form onSubmit={handleSubmit} >
          <div className={styles.heading}>Create New group</div>
          {groupValues.map((value, index) => (
            <div key={index} className={styles.groupContainer}>
              <label>
                Group Name
                <input
                  type="text"
                  placeholder="Enter your group name"
                  className={styles.inputBox}
                  name="groupName"
                  value={value.groupName}
                  onChange={(event) => handleNameChange(event, index)}
                />
              </label>
              <label className={styles.colourContainer}>
                Choose Colour
                <div
                  className={`${styles.colourChoice1} ${borderIndex === "#B38BFA" ? styles.borderColor : ""}`}
                  onClick={() => handleColorChoice("#B38BFA", index)}
                ></div>
                <div
                  className={`${styles.colourChoice2} ${borderIndex === "#FF79F2" ? styles.borderColor : ""}`}
                  onClick={() => handleColorChoice("#FF79F2", index)}
                ></div>
                <div
                  className={`${styles.colourChoice3} ${borderIndex === "#43E6FC" ? styles.borderColor : ""}`}
                  onClick={() => handleColorChoice("#43E6FC", index)}
                ></div>
                <div
                  className={`${styles.colourChoice4} ${borderIndex === "#F19576" ? styles.borderColor : ""}`}
                  onClick={() => handleColorChoice("#F19576", index)}
                ></div>
                <div
                  className={`${styles.colourChoice5} ${borderIndex === "#0047FF" ? styles.borderColor : ""}`}
                  onClick={() => handleColorChoice("#0047FF", index)}
                ></div>
                <div
                  className={`${styles.colourChoice6} ${borderIndex === "#6691FF" ? styles.borderColor : ""}`}
                  onClick={() => handleColorChoice("#6691FF", index)}
                ></div>
              </label>
            </div>
          ))}
          <div className={styles.btnContainer} >
            <button type="submit" className={styles.btn}>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
