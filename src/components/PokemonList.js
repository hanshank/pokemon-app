import React, { Component } from 'react';
import base from '../base';
import PokemonItem from './PokemonItem';
import PokemonAttributes from './PokemonAttributes';
import '../css/PokemonList.css'
import '../css/main.css';


const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

class PokemonList extends Component {
  constructor() {
    super();
    
    this.state = {
      pokemons: [],
      myPokemons: [],
      stats: [],
      isMyTeamVisible: false,
    }
    this.handleAddPokemon = this.handleAddPokemon.bind(this);
    this.handleRemovePokemon = this.handleRemovePokemon.bind(this);
  }

  componentDidMount() {
    var interval = {
      limit: 10, 
    }

    P.getPokemonsList(interval)
      .then(response => {
        this.setState({ pokemons: response.results });
      });

    P.getStatsList().then(res => this.setState({
      stats: res.results.slice(0, 6),
    }));

    this.ref = base.syncState('myPokemons', {
      context: this,
      state: 'myPokemons',
      asArray: true
    })
  }

  handleAddPokemon(name) {
    if (this.state.myPokemons.length <= 6) {
      this.setState({ myPokemons: [...this.state.myPokemons, name] });
    }
  }

  handleSetActivePokemon() {
    console.log('Hey there active pokemon');
  }

  handleRemovePokemon(selectedPokemon) {
    const myTeam = this.state.myPokemons
    const updatedPokemons = myTeam.filter(pokemon => pokemon.name !== selectedPokemon.name)
    this.setState({myPokemons: updatedPokemons})
  }

  render() {
    const { pokemons, myPokemons, stats } = this.state;
    const { isMyTeamVisible } = this.props;

    if (isMyTeamVisible) {
      return (
        <div className='container'>
          <h1 className="">My team</h1>
          <table className='pokemon-list'>
            <PokemonAttributes stats={stats} />
            {myPokemons.map((pokemon, i) => <PokemonItem pokemon={pokemon} addPokemon={this.handleAddPokemon} removePokemon={this.handleRemovePokemon} setActivePokemon={() => this.handleSetActivePokemon()} key={i} />)}
          </table>
        </div>
      )
    }

    return (
      <div className='container'>
        <table className='pokemon-list'>
          <thead>
            <PokemonAttributes stats={stats} />
          </thead>
          <tbody>
            {pokemons.map((pokemon, i) => <PokemonItem pokemon={pokemon} addPokemon={this.handleAddPokemon} removePokemon={this.handleRemovePokemon} setActivePokemon={() => this.handleSetActivePokemon()} key={i} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PokemonList;