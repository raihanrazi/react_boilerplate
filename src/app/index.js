import React from 'react';
import { render } from 'react-dom';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My Main Component</h1>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
