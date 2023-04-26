import React from "react";
import styles from "../style.module.css";

export default function Header({ todoList }) {
  let ccc;

  if (todoList.length === 0) ccc = "All caught up!";
  if (todoList.length > 0) ccc = `Need to complete: ${todoList.length}`;

  return (
    <div className={styles.headerBox}>
      <h1 className={styles.header}>Todo App</h1>
      <h2 className={styles.counter}>{ccc}</h2>
    </div>
  );
}
