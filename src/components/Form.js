import React from "react";
import styles from "../style.module.css";
import { nanoid } from "nanoid";

export default function Form({ todo, setTodo, todoList, setTodoList }) {
  const handelChange = (e) => {
    setTodo(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    // check if empty
    if (todo === "") return;

    //
    setTodoList([...todoList, { name: todo, id: nanoid() }]);

    // clear input
    setTodo("");
  };

  return (
    <div className={styles.todoForm}>
      <form action="" onSubmit={handelSubmit}>
        <div className={styles.addButtonBox}>
          <input
            className={styles.todoInput}
            type="text"
            placeholder="Add Todo Item"
            value={todo}
            onChange={handelChange}
          />

          <button className={styles.addBtn}>Add</button>
        </div>
      </form>

      <div></div>
    </div>
  );
}
