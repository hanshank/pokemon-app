import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../css/navbar.css';
import '../css/main.css';

class Navbar extends Component {

  render() {
    const { showMyTeam, hideMyTeam } = this.props;

    return (
      <header className="container">
        <Link to='/'>
          <img src={Logo} alt="PokeAPiLogo" className="headerLogo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to='/team' className='link' >
                My Team
              </Link>
            </li>
            
            <div id="search-container">
              <li><button type="submit" class="searchButton">
                  <i className="fa fa-search"></i>
                </button>
              </li>
              <li><input type="text" placeholder="Search Pokemon" /></li>
            </div>
          </ul>
        </nav>

      </header>
    )
  }
}

export default Navbar;