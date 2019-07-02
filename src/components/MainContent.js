import React from 'react';
import ToDoItem from './ToDoItem.js';

const style = {
  center: {
    display: "flex",
    width: "50%",
    margin: "0 auto",
    justifyContent: "center"
  }
}


const MainContent = () => (
  <main style={style.center}>
    <ToDoItem info={{
      task: "Do the dishes",
      owner: "Alex"
    }}/>
        <ToDoItem info={{
      task: "Do the laundry",
      owner: "Alex"
    }}/>
        <ToDoItem info={{
      task: "Do the hustle",
      owner: "Alex"
    }}/>

  </main>

)

export default MainContent;
