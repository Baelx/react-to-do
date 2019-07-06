import React, {Component} from 'react';
import ToDoItem from './ToDoItem.js';
import toDoArray from '../data/toDoData';

const style = {
  center: {
    display: "flex",
    width: "50%",
    margin: "0 auto",
    justifyContent: "center"
  }
}



class MainContent extends Component {
 
constructor() {
  super();
  this.state = [
    {
        id: 54,
        title: "Do the dishes",
        complete: false
    },
    {
        id: 83,
        title: "Do the laundry",
        complete: false
    },
    {
        id: 82,
        title: "Do the hustle",
        complete: true
    }
]
}


render () {
  const toDoItems = this.state.map(task => <ToDoItem key={task.id} title={task.title} complete={task.complete}/>)


  return (

  <main style={style.center}>
  {toDoItems}
  </main>
)
}

}
export default MainContent;
