import React, {Component} from 'react';

class TodosData extends Component {
    constructor() {
        this.state = {
                task1: {
                    id: 54,
                    title: "Do the dishes",
                    complete: false
                },
                task2: {
                    id: 83,
                    title: "Do the laundry",
                    complete: false
                },
                task3: {
                    id: 82,
                    title: "Do the hustle",
                    complete: true
                }
            
        }
    }

    render() {
        console.log(this.state);

        return (
            this.state
        )
    }
}

export default TodosData;
