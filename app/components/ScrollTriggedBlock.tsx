"use client";

import { motion } from "framer-motion";
import styles from "../page.module.css";

const ScrollTriggedBlock = (): JSX.Element => {
  const variants = {
    hidden: {
      height: 150,
      width: 150,
    },
    visible: {
      backgroundColor: ["#60F", "#ae11bd", "#09F", "#FA0", "#11d933"],
      scale: [1, 1.5, 1.5, 1, 1],
      rotate: [0, 0, 180, 180, 0],
      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      transition: {
        duration: 3,
        delay: 0.5,
      },
    },
  };

  return (
    <section className={styles.scrollSection}>
      <h2>Анимация по скроллу</h2>

      <div className={styles.scrollBlocks}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
        />
      </div>
    </section>
  );
};

export default ScrollTriggedBlock;
