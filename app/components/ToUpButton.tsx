"use client";
import { motion, useScroll } from "framer-motion";
import Arrow from "./Arrow";
import styles from "./ToUpButton.module.css";

const ToUpButton = (): JSX.Element => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={{ opacity: scrollYProgress }}
      className={styles.button}
    >
      <Arrow />
    </motion.button>
  );
};

export default ToUpButton;
