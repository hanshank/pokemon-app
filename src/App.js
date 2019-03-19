import React, { Component } from 'react';
import './App.css';


const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

class App extends Component {
  render() {
    P.getPokemonByName('pikachu').then (res => console.log(res))
    return(<div></div>)
  }
}

export default App;
