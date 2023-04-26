import React from "react";
import styles from "../style.module.css";

export default function Todo({ item, todoList, setTodoList }) {
  console.log(item);
  const handelDelete = (e) => {
    let list = [...todoList];
    const filtered = list.filter((el, i) => el.id !== item.id);

    setTodoList(filtered);
  };

  return (
    <div>
      <div className={styles.todoItem}>
        <h3 className={styles.todoName}>{item.name}</h3>
        <button className={styles.deleteBtn} onClick={handelDelete}>
          Done
        </button>
      </div>
    </div>
  );
}
