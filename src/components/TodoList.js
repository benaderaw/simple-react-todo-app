import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, setTodoList }) {
  const list = todoList.map((listObj, i) => (
    <Todo
      item={listObj}
      key={listObj.id}
      todoList={todoList}
      setTodoList={setTodoList}
    />
  ));

  return <div>{list}</div>;
}
