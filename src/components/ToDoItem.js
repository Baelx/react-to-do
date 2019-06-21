import React from 'react';

const ToDoItem = (props) => (
  <div>
    <input type="checkbox" /><p>{props.name}</p>
  </div>
)

export default ToDoItem;
