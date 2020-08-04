import React from 'react';

export default (props) => (
  <div
    style={{ textDecoration: props.isDone ? 'line-through' : '' }}
    onClick={props.toggleDone}
  >
    {props.text}
  </div>
);
