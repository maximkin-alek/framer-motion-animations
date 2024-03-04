"use client";

import styles from "../page.module.css";
import { useAnimation, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const Hooks = (): JSX.Element => {
  const controls = useAnimation();

  const scale = useMotionValue(1);

  useEffect(() => {
    scale.on("change", (s) => console.log(s));
  }, []);

  const handleRotateLeft = () => {
    controls.start({
      rotate: -360,
      transition: {
        duration: 3,
      },
    });
  };

  const handleRotateRight = () => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 3,
      },
    });
  };

  return (
    <section>
      <h2>Хуки useAnimation и useMotionValue</h2>

      <div className={styles.divWrapper}>
        <motion.button
          whileTap={{ scale: 1.05 }}
          whileHover={{ scale: 0.95 }}
          className={styles.hookButton}
          onClick={handleRotateLeft}
          style={{ scale }}
        >
          Вращать влево
        </motion.button>
        <motion.div
          onClick={() => controls.stop()}
          className={styles.controledDiv}
          animate={controls}
        />
        <motion.button
          whileTap={{ scale: 1.05 }}
          whileHover={{ scale: 0.95 }}
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
