import React, { Component } from 'react';

class App extends Component {
  render() {
  return (
    <div className="App">
      <button type="button" onClick={this.getMyStorage}>Get Data</button>
    </div>
  );
  }
  getMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.getItem("Paragon");
    sessionStorage.getItem("frontend");

    var myLocalStorageData = localStorage.key(1);
    var mySessionStorageData = sessionStorage.key(1);

   }
   
}

export default App;
