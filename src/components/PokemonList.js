import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import PokemonAttributes from './PokemonAttributes';
import '../css/PokemonList.css'


const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

class PokemonList extends Component {
  constructor() {
    super();
    
    this.state = {
      pokemons: [],
    }
  }

  componentDidMount() {
    var interval = {
      limit: 10, 
    }

    const getPokemons = P.getPokemonsList(interval)
      .then(response => {
        this.setState({ pokemons: response.results });
      });
  }

  render() {
    const { pokemons } = this.state;
    return (
      <table className='pokemon-list'>
        <PokemonAttributes />
        {pokemons.map((pokemon, i) => <PokemonItem pokemon={pokemon} key={i} />)}
      </table>
    )
  }
}

export default PokemonList;