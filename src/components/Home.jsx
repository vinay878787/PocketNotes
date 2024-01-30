import { useContext,useState } from "react";
import styles from "./Home.module.css";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
import Hero from "./Hero";
import Modal from "./Modal";
import Group from "./Group";
import { IndexContext } from "../store/IndexContext";



function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const {clickedIndex} = useContext(IndexContext)
  return (
    <div className={styles.container}>
      <Sidebar openModal={openModal}/>
      {clickedIndex!=null?<Hero/>:<Welcome />}
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default Home;
