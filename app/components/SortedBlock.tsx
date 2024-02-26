"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CARDS } from "../data";
import Card from "../components/Card";
import styles from '../page.module.css'

const SortedBlock = (): JSX.Element => {
  const [sortedCards, setSortedCards] = useState(CARDS);
  const [sortVariant, setsortVariant] = useState<"default" | "name" | "price">(
    "default"
  );

  useEffect(() => {
    if (sortVariant === "default") {
      setSortedCards([...CARDS]);
    }

    if (sortVariant === "price") {
      const sorted = [...sortedCards].sort((a, b) => a.price - b.price);
      setSortedCards(sorted);
    }

    if (sortVariant === "name") {
      const sorted = [...sortedCards].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      setSortedCards(sorted);
    }
  }, [sortVariant]);

  const handleDeleteCard = (id: string) => {
    setSortedCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <section>
      <h2>Сортировка карточек товара</h2>
      <div className={styles.buttons}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setsortVariant("default")}
          className={styles.button}
        >
          Сброс
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setsortVariant("price")}
          className={styles.button}
        >
          По цене
        </motion.button>

        <motion.button
          onClick={() => setsortVariant("name")}
          className={styles.button}
          whileTap={{ scale: 0.9 }}
        >
          По названию
        </motion.button>
      </div>

      <div className={styles.cards}>
        {sortedCards.map(({ name, price, id }) => (
          <Card
            id={id}
            onDeleteClick={handleDeleteCard}
            layout
            name={name}
            price={`${price}$`}
            key={id}
          />
        ))}
      </div>
    </section>
  );
};

export default SortedBlock;
