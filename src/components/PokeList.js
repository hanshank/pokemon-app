import React, { Component } from 'react';
import PokemonTab from './PokemonTab';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

class PokeList extends Component {
  constructor() {
    super();
    
    this.state = {
      pokemons: [],
    }
  }

  componentDidMount() {
    var interval = {
      limit: 0,
      offset: 10
    }

    const getPokemons = P.getPokemonsList(interval)
      .then(response => {
        this.setState({ pokemons: response.results });
      });
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div>
        {this.state.pokemons.map((pokemon, i) => <PokemonTab pokemon={pokemon} key={i} />)}
      </div>
    )
  }
}

export default PokeList;