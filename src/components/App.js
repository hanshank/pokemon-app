import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../css/main.css';
import PokemonList from './PokemonList';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMyTeamVisible: false,
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar showMyTeam={() => this.showMyTeam()} hideMyTeam={() => this.hideMyTeam()} />
          
          <Route 
          exact path='/' 
          component={PokemonList} 
          />
          <Route 
            exact path='/team' 
            render={(props) => <PokemonList {...props} isMyTeamVisible={true} />}
          />
          
        </div>
      </Router>
    );
  }
}

export default App;
