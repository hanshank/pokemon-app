import React, { Component } from 'react';
import '../css/main.css';
import PokeList from './PokeList';
import AttributesTab from './AttributesTab';


class App extends Component {

  render() {
    return (
      <div className="App">
        <AttributesTab />
        <PokeList />
      </div>
    );
  }
}

export default App;
