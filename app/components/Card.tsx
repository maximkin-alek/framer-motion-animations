"use client";
/* eslint-disable react/display-name */
import { ForwardedRef, forwardRef } from "react";
import styles from "./card.module.css";
import { motion } from "framer-motion";

interface CardProps {
  name: string;
  price: string;
  onDeleteClick: (id: string) => void;
  id: string;
}

const Card = motion(
  forwardRef(
    (
      { name, price, id, onDeleteClick }: CardProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      return (
        <div ref={ref} className={styles.card}>
          <button
            className={styles.deleteButton}
            onClick={() => onDeleteClick(id)}
          />
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.price}>Цена:{price}</p>
        </div>
      );
    }
  )
);

export default Card;
