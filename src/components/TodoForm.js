import React from 'react';

export default class TodoForm extends React.Component {
  state = {
    text: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      text: this.state.text,
      isDone: false,
      id: Math.random(),
    });
    //clear the input
    this.setState({
      text: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          placeholder="todo..."
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
