"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Arrow from "./Arrow";
import styles from "./ToUpButton.module.css";
import { useEffect } from "react";

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
