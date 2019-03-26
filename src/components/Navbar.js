import React, { Component } from 'react';
import '../css/navbar.css';
import '../css/main.css';

class Navbar extends Component {

  render() {
    const { showMyTeam, hideMyTeam } = this.props;

    return (
      <header className="container">
        <a href="#" onClick={() => hideMyTeam()}>
          <img src="./logo.png" alt="PokeAPiLogo" className="headerLogo" />
        </a>
        <nav>
          <ul>
            <li><a className="btn" onClick={() => showMyTeam()} >My Team</a></li>
            <div id="search-container">
              <li><button type="submit" class="searchButton">
                  <i className="fa fa-search"></i>
                </button>
              </li>
              <li><input type="text" placeholder="Search Pokemons" /></li>
            </div>
          </ul>
        </nav>

      </header>
    )
  }
}

export default Navbar;