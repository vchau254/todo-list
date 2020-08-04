import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({
      count: this.setState.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.setState.count - 1,
    });
  };
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
