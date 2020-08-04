import React from "react";

export default ({ todo, toggleDone }) => {
  return (
    <div
      className={todo.isDone ? "checked" : "unchecked"}
      onClick={() => toggleDone(todo.id)}
    >
      {todo.text}
    </div>
  );
};
