// Allows for JSX
import React from 'react';
//Allows us to render to the DOM
import ReactDOM from 'react-dom';
// Stylesheet
import './index.css'


// Components should have a capital letter even if you're just using functional syntax
// and not this class syntax
class List extends React.Component {
  render() {
    return (
      // Note that you can't have two html element side by side. The first argument
      <ul>
        <li>sus</li>
        <li>sus</li>
      </ul>


    );
  }
}

// ReactDOM.render(<ul><li>sus 2</li><li>sus 2</li></ul>, document.getElementById('root'))


// ========================================

ReactDOM.render(
  // This syntax below instantiates the component
  <List />,
  document.getElementById('root')
);
