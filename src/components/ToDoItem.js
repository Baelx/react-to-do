import React from 'react';
import '../App.css'


const ToDoItem = (props) => (
  <div className="to-do-item">
    <input type="checkbox" />
    <p>{props.info.task}</p>
    <p>Owner: {props.info.owner}</p>
  </div>
)

export default ToDoItem;
