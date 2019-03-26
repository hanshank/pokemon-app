import React, { Component } from 'react';
import "../css/main.css";

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

class PokemonAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      stats: [],
    }
  }

  render() {
    const { loading } = this.state;
    const { stats } = this.props;

    if (loading) {
      return <div>loading</div>;
    }

    return (   
      <tr className="pokemon-item">
      <th>Action</th>
      <th>Icon</th>
        <th className="pokemon-attribute">
          name
        </th>
        <th className="pokemon-attribute">
          type
        </th>
        {stats.map((stat, i) => 
          <th className="pokemon-attribute" key={i}>
          {stat.name}
          </th>
          )}
      </tr>
    ) 
  }
} 

export default PokemonAttributes;