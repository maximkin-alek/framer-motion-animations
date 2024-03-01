"use client";

import styles from "../page.module.css";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

const Hooks = (): JSX.Element => {
  const controls = useAnimation();

  const handleRotateLeft = () => {
    controls.start({
      rotate: -180,
      transition: {
        duration: 1.5,
      },
    });
  };

  const handleRotateRight = () => {
    controls.start({
      rotate: 180,
      transition: {
        duration: 1.5,
      },
    });
  };

  return (
    <section>
      <h2>Хук useAnimation</h2>

      <div className={styles.divWrapper}>
        <motion.button className={styles.hookButton} onClick={handleRotateLeft}>
          Вращать влево
        </motion.button>
        <motion.div
          onClick={() => controls.stop()}
          className={styles.controledDiv}
          animate={controls}
        />
        <motion.button
          className={styles.hookButton}
          onClick={handleRotateRight}
        >
          Вращать вправо
        </motion.button>
      </div>
    </section>
  );
};

export default Hooks;
