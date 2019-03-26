import React, { Component } from 'react';
import '../css/main.css';
import '../css/pokemon-details.css';

import Pikachu from '../images/pikachu.png';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();




class PokemonDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: {},
      loading: true,
    }
  }

  componentDidMount() {
    const {name} = this.props.match.params;

    P.getPokemonByName(name).then(res => this.setState({ 
      pokemon: res,
      loading: false, 
    }));
    
  }

  render () {
    const { pokemon, loading } = this.state;

    if (loading) return <div>Loading</div>;
    console.log(pokemon);
    return (
      <div className='container pokemon-wrapper'>
        <img src={Pikachu} className='detail-img'/>
        <h1>Pokemon details are coming here yo</h1>
      </div>
    )
  }
}

export default PokemonDetails;