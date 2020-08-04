import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  state = {
    todoList: [],
  };

  addTodo = (todo) => {
    const { todoList } = this.state;
    const newTodo = [...todoList, todo];
    this.setState({ todoList: newTodo });
  };

  toggleDone = (id) => {
    this.setState(({todoList}) => ({
      todoList: todoList.map((todo) => {
        if (todo.id === id) {
          console.log("here");
          return {...todo, isDone: !todo.isDone}; //update isDone only
        } else {
          return todo;
        }
      }),
    }));
  };
  render() {
    const { todoList } = this.state;
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todoList.map((todo) => (
          <TodoItem key={todo.id} toggleDone={this.toggleDone} todo={todo} />
        ))}
      </div>
    );
  }
}
