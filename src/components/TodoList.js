import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  state = {
    todoList: [],
  };

  addTodo = (todo) => {
    const newTodo = [...this.state.todoList];
    newTodo.push(todo);
    this.setState({ todoList: newTodo });
  };

  toggleDone = (id) => {
    this.setState((state) => ({
      todoList: state.todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone }; //update isDone only
        } else {
          return todo;
        }
      }),
    }));
  };
  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              toggleDone={() => this.toggleDone(todo.id)}
              text={todo.text}
            />
          );
        })}
      </div>
    );
  }
}
