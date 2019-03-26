import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/pokemon-item.css';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();


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
    const { addPokemon, setActivePokemon } = this.props;

    if (loading) return <div>Loading</div>;

    return(
      <tr className="pokemon-item">
        <td>
          <button onClick={() => addPokemon(pokemon)} type='button'>+</button>
          <Link to={`/pokemon/${pokemon.name}`} className='page-link'>
            Details
          </Link>
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