"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CARDS } from "./data";
import Card from "./components/Card";
import List from "./components/List";
import SortedBlock from "./components/SortedBlock";

export default function Home() {
  return (
    <main className={styles.main}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ times: [0, 0.2, 1], duration: 2 }}
        animate={{ opacity: [0, 1, 0.5], scale: [0.8, 1.3, 1] }}
      >
        Анимации
      </motion.h1>

      <List />

      <SortedBlock />
    </main>
  );
}
