"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../page.module.css";

const List = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const arr = new Array(8)
    .fill("")
    .map((_, index) => "Пункт" + " " + (index + 1));

  const variants = {
    visible: {
      x: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      x: 0,
    },
  };

  const variants2 = {
    visible: {
      opacity: 1,
      height: 24,
      padding: 8,
      marginBottom: 4,
      border: "1px solid gray",
    },
    hidden: {
      opacity: 0,
      height: 0,
      padding: 0,
      marginBottom: 0,
      border: 0,
    },
  };

  return (
    <>
      <h2>Список</h2>
      <motion.div
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
        layout
        variants={variants}
        onClick={() => setIsOpen(!isOpen)}
        className={styles.listTitle}
      >
        Кликабельный список
        <ul className={styles.list}>
          {arr.map((item, i) => (
            <motion.li className={styles.listItem} variants={variants2} key={i}>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default List;
