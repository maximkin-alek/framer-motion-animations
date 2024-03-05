"use client";

import styles from "./page.module.css";
import { delay, motion } from "framer-motion";
import List from "./components/List";
import SortedBlock from "./components/SortedBlock";
import ToUpButton from "./components/ToUpButton";
import ScrollTriggedBlock from "./components/ScrollTriggedBlock";
import Exit from "./components/Exit";
import Sidebar from "./components/Sidebar";
import Hooks from "./components/Hooks";

export default function Home() {
  return (
    <main className={styles.main}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ times: [0, 0.2, 1], duration: 2 }}
        animate={{ opacity: [0, 1, 0.8], scale: [0.8, 1.3, 1] }}
      >
        Анимации на Framer motion
      </motion.h1>
      <h2>Описание</h2>
      <p className={styles.description}>
        Framer Motion - это мощная библиотека анимаций для React, обеспечивающая
        простоту в использовании и гибкие возможности настройки. С ее помощью
        разработчики могут легко создавать разнообразные анимации, включая
        движение, изменение стилей и эффекты взаимодействия.
      </p>
      <p className={styles.description}>
        Библиотека предлагает различные типы анимаций, включая плавные и
        пружинные, а также обладает высокой производительностью, что делает ее
        отличным выбором для создания интерактивных пользовательских интерфейсов
        в веб-приложениях на основе React.
      </p>
      <h2>Плюсы и минусы</h2>
      <h3>Плюсы:</h3>
      <ol>
        <li className={styles.descriptionItem}>
          Простота использования: Framer Motion предлагает простой и
          дружественный интерфейс для создания анимаций в React. Синтаксис
          напоминает CSS, что делает его доступным для широкого круга
          разработчиков.
        </li>
        <li className={styles.descriptionItem}>
          Гибкость: Библиотека предоставляет множество возможностей для создания
          различных типов анимаций, включая движение, изменение стилей,
          появление и исчезновение элементов и многое другое. Это позволяет
          реализовывать самые разнообразные идеи.
        </li>
        <li className={styles.descriptionItem}>
          Поддержка SVG и 3D: Framer Motion поддерживает работу с SVG-графикой и
          даже позволяет создавать анимации в трехмерном пространстве, что
          делает его мощным инструментом для разработки интерактивных
          веб-приложений.
        </li>
        <li className={styles.descriptionItem}>
          Высокая производительность: Библиотека разработана с учетом
          оптимизации производительности. Она использует анимацию через CSS и
          работает с GPU, что обеспечивает плавные и эффективные анимации даже
          на мобильных устройствах.
        </li>
        <li className={styles.descriptionItem}>
          Документация и сообщество: Framer Motion обладает хорошо
          структурированной документацией и активным сообществом, где можно
          найти множество примеров и подсказок по использованию библиотеки.
        </li>
      </ol>

      <h3>Минусы:</h3>

      <ol>
        <li className={styles.descriptionItem}>
          Размер библиотеки: Хотя Framer Motion стремится к оптимизации
          производительности, ее размер может быть значительным для некоторых
          проектов. Это может быть проблематично для приложений, где важна
          минимизация размера бандла.
        </li>
        <li className={styles.descriptionItem}>
          Изучение нового инструмента: Для новых разработчиков может
          потребоваться время, чтобы овладеть синтаксисом и особенностями работы
          с Framer Motion.
        </li>
        <li className={styles.descriptionItem}>
          Возможные конфликты: Иногда Framer Motion может конфликтовать с
          другими библиотеками или фреймворками, особенно если они также
          используют анимации.
        </li>
      </ol>

      <motion.h2 whileHover={{ scale: 1.1 }} className={styles.subtitle}>
        Примеры анимаций
      </motion.h2>

      <List />
      <SortedBlock />
      <ScrollTriggedBlock />
      <Exit />
      <Sidebar />
      <Hooks />
      <ToUpButton />
    </main>
  );
}
