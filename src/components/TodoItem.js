import React from 'react';

export default (props) => (
  <div
    className={props.isDone ? 'checked' : 'unchecked'}
    onClick={props.toggleDone}
  >
    {props.text}
  </div>
);
