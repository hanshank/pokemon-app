import React, { Component } from 'react';
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

  showMyTeam() {
    this.setState({ isMyTeamVisible: true });
  }

  hideMyTeam() {
    this.setState({ isMyTeamVisible: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar showMyTeam={() => this.showMyTeam()} hideMyTeam={() => this.hideMyTeam()} />
        <PokemonList isMyTeamVisible={this.state.isMyTeamVisible} />
      </div>
    );
  }
}

export default App;
