import React from 'react';
import '../App.css';

const ToDoItem = (props) => (
  <div className="to-do-item">
    <input type="checkbox" checked={props.complete}/>
    <p>{props.title}</p>
  </div>
)

export default ToDoItem;
