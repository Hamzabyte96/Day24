import React, { Component } from 'react';

class App extends Component {
  render() {
  return (
    <div className="App">
      <button type="button" onClick={this.setMyStorage}>Set Data</button>
    </div>
  );
  }
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
   }
   
}

export default App;
