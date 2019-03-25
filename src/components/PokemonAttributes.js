import React, { Component } from 'react';
import "../css/main.css";

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

class PokemonAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      stats: [],
    }
  }

  componentDidMount() {
    P.getStatsList().then(res => this.setState({
      stats: res.results,
      loading: false,
    }));
  }

  render() {
    const { stats, loading } = this.state;

    if (loading) {
      return <div>loading</div>;
    }

    return (   
      <tr className="pokemon-item">
        <th className="pokemon-attribute">
          icon
        </th>
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