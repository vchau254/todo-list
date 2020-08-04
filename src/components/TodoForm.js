import React from "react";

export default class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const {onSubmit} = this.props;
    const {text} = this.state;
    onSubmit({
      text,
      isDone: false,
      id: Math.random(),
    });
    //clear the input
    this.setState({
      text: "",
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
        />
        <button>Add</button>
      </form>
    );
  }
}
