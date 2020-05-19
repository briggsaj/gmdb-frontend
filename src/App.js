import React from 'react';
import './App.css';
import MovieList from './MovieList.js'

class App extends React.Component {
  state = {
    testState: 'initialized'
  }

  render(){
    return (
      <div className="App">
        {this.state.testState}
        <MovieList/>
      </div>
    )
  }
}

export default App;
