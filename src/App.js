import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };
    this.addItem = this.addItem.bind(this);
    this.deleleItem = this.deleleItem.bind(this);
  }

  addItem = (event) => {
    if (this.inputVal.value !== '') {
      var newTask = {
        task: this.inputVal.value,
        key: Math.random(),
      };
    } else {
      return;
    }
    const currentList = [...this.state.todoList];
    currentList.push(newTask);
    this.setState({ todoList: currentList });

    this.inputVal.value = ''; //clear input field
    event.preventDefault();
    console.log(currentList);
  };

  deleleItem = (key) => {
    const currentList = this.state.todoList.filter(
      (newTask) => key !== newTask.key
    );
    this.setState({ todoList: currentList });
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <form onSubmit={this.addItem}>
          <input
            ref={(e) => (this.inputVal = e)}
            placeholder="Enter task"
          ></input>
          <button type="submit">Add</button>
        </form>
        <ul className="theList">
          {this.state.todoList.map((newTask) => {
            return (
              <li key={newTask.key}>
                {newTask.task}
                <button
                  key={newTask.key}
                  className="deleteBtn"
                  onClick={() => this.deleleItem(newTask.key)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todolist;
