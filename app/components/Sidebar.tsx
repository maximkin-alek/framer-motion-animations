"use client";

import { useState } from "react";
import styles from "./Sidebar.module.css";
import SidebarArrow from "./SidebarArrow";
import { motion } from "framer-motion";

const Sidebar = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);
  const imageVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: "-100%",
    },
  };
  const buttonVariants = {
    visible: {
      rotate: 180,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hidden: {
      rotate: 0,
    },
  };
  return (
    <section className={styles.sidebar}>
      <h2 className={styles.title}>Сайдбар</h2>

      <motion.button
        variants={buttonVariants}
        initial="hidden"
        animate={isOpened ? "visible" : "hidden"}
        onClick={() => setIsOpened(!isOpened)}
        whileTap={{ scale: 0.9 }}
        className={styles.button}
      >
        <SidebarArrow />
      </motion.button>

      <motion.img
        initial="hidden"
        animate={isOpened ? "visible" : "hidden"}
        className={styles.image}
        variants={imageVariants}
        src="https://avatars.mds.yandex.net/get-mpic/5217715/img_id4445434902351195210.jpeg/orig"
      />
    </section>
  );
};

export default Sidebar;
