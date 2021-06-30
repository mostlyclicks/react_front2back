import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {

    const name = "Carlos"
    const loading = false;
    const showName = true;

    // if(loading) {
    //   return <h4>Loading...</h4>
    // } 

    return (
      <div className="App">

        {loading ? <h4>Loading... </h4> : <h1>Hello {showName && name} From React</h1>}
        

      </div>
    );
  }
}

export default App;
