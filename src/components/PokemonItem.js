import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/pokemon-item.css';

const Pokedex = require('pokeapi-js-wrapper');

const options = {
  protocol: 'https',
  versionPath: '/api/v2/',
  cache: true,
}

const P = new Pokedex.Pokedex(options);


class PokemonItem extends Component {
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

  componentDidUpdate(prevProps) {
    console.log('did update');
    if (this.props.pokemon !== prevProps.pokemon ) {
      P.getPokemonByName(this.props.pokemon.name).then(res => this.setState({ 
        pokemon: res,
        loading: false, 
      }));
    }
  }

  render() {
    const { pokemon, loading } = this.state;
    const { addPokemon, removePokemon, setActivePokemon } = this.props;


    if (loading) return <div>Loading</div>;

    return(
      <tr className="pokemon-item">
        <td>
          <Link to={`/pokemon/${pokemon.name}`} className='page-link'>
            Details
          </Link>
          <button onClick={() => removePokemon(pokemon)}>x</button>
          <button onClick={() => addPokemon(pokemon)}>+</button>
        </td>
        <td className="pokemon-attribute">
          <img src={pokemon.sprites.front_shiny}></img>
        </td>

        <td className="pokemon-attribute">
          { pokemon.name }
        </td>

        <td className="pokemon-attribute">
        { pokemon.types.map(type => 
          type.type.name
        )}
        </td>
        {pokemon.stats.slice(0).reverse().map((stat, i) => {
          const { name } = stat.stat;
          return <td className="pokemon-attribute" key={i}>{stat.base_stat}</td>;
          })}
      </tr>
    );
  }
}

export default PokemonItem;