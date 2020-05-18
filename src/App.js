import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    testState: 'initialized'
  }

  render(){
    return (
      <div className="App">
        {this.state.testState}
      </div>
    )
  }
}

export default App;
