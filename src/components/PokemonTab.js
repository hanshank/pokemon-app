import React, { Component } from 'react';
import '../css/pokemon-tab.css';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();


class PokemonTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      pokemon: {
        stats: []
      },
    }
  }

  componentDidMount() {
    P.getPokemonByName(this.props.pokemon.name).then(res => this.setState({ 
      pokemon: res,
      loading: false, 
    }));
  }

  render() {
    const { pokemon, loading } = this.state;

    if (loading) return <div>Loading</div>;

    console.log(pokemon.sprites.front_default);


    return(
      <div class="pokemon-tab">
      

        <div className="pokemon-attribute">
          <img src={pokemon.sprites.front_default}></img>
        </div>

        <div className="pokemon-attribute">
          { pokemon.name }
        </div>
        
        {pokemon.stats.map(stat => {
          const { name } = stat.stat;
          return <div className="pokemon-attribute">{`${name} ${stat.base_stat}`}</div>;
          })}
      </div>
    );
  }
}

export default PokemonTab;