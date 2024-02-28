"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "../page.module.css";

const Exit = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className={styles.exitSection}>
      <h2>Анимация скрытия</h2>

      <motion.button
        layout
        className={styles.show}
        onClick={() => setIsVisible(true)}
      >
        Открыть
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ rotate: 0, height: 0, width: 0 }}
            animate={{ height: 50, width: 250 }}
            exit={{ rotate: [0, -45, 45, 0, 0], height: [50, 50, 50, 50, 0] }}
            onClick={() => setIsVisible(false)}
            transition={{ delay: 0.1, duration: 1 }}
            className={styles.exit}
          >
            Скрыть
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Exit;
