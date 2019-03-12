import React, { Component } from 'react';
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

class PokeList extends Component {

  render() {
    var interval = {
      limit: 0,
      offset: 10
    }
    P.getPokemonsList(interval)
      .then(function(response) {
        console.log(response);
      })

    return(
      <div>
      </div>
    );
  }
}

export default PokeList;