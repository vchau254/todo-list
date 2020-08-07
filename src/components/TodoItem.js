import React from 'react';

export default ({ todo, toggleDone, handleDelete }) => {
  return (
    <div className="todo">
      <select className="priority">
        <option value="3">Normal</option>
        <option value="0">Urgent</option>
        <option value="1">Critical</option>
        <option value="2">If You Can</option>
      </select>

      <div className={`text ${todo.isDone ? 'checked' : 'unchecked'} `}>
        {todo.text}
      </div>
      <button onClick={() => toggleDone(todo.id)}>&#10004;</button>
      <button onClick={() => handleDelete(todo.id)}>X</button>
      <div className="todoDate">{todo.date.toDateString()}</div>
    </div>
  );
};
