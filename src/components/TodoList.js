import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

// Add sort function based on priority - scale 1-5 - use select
// uncompleted tasks on the top
// sort alphabetically
// sort based on the date of creation

export default class TodoList extends React.Component {
  state = {
    todoList: [],
    value: 'all',
    priority: '3',
  };

  addTodo = (todo) => {
    const { todoList } = this.state;
    const newTodo = [...todoList, todo];
    this.setState({ todoList: newTodo });
  };

  toggleDone = (id) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone }; //update isDone only
        } else {
          return todo;
        }
      }),
    }));
  };

  // handle priority change
  handlePriority = (e) => {
    this.setState({ priority: e.target.value });
    console.log('here', this.state.priority, e.target.value);
  };

  handleDelete = (id) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.filter((todo) => todo.id !== id),
    }));
  };
  //handle Change for select
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    let { todoList } = this.state;
    let { value } = this.state;

    if (value === 'incomplete') {
      todoList = todoList.filter((todo) => !todo.isDone);
    } else if (value === 'complete') {
      todoList = todoList.filter((todo) => todo.isDone);
    } else if (value === 'a-z') {
      todoList.sort(function (a, b) {
        let textA = a.text.toUpperCase();
        let textB = b.text.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    } else if (value === 'date created') {
      todoList.sort(function (a, b) {
        let dateA = a.date;
        let dateB = b.date;
        return dateA - dateB;
      });
    } else {
      //Move completed task in the end of list
      let incomplete = todoList.filter((todo) => !todo.isDone);
      let complete = todoList.filter((todo) => todo.isDone);
      todoList = incomplete.concat(complete);
    }
    console.log(todoList);
    return (
      <div className="todoList">
        <h1> TODO LIST</h1>
        <TodoForm onSubmit={this.addTodo} priority={this.state.priority} />
        <div className="select">
          <label>Sort by</label>
          <select value="this.state.value" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="a-z">A-Z</option>
            <option value="incomplete">Incomplete List</option>
            <option value="complete">Complete List</option>
            <option value="date created">Date created</option>
            <option value="priority">Priority</option>
          </select>
        </div>

        {todoList.map((todo) => (
          <TodoItem
            handlePriority={this.handlePriority}
            key={todo.id}
            toggleDone={this.toggleDone}
            todo={todo}
            handleDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}
