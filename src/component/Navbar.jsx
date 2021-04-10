import React from "react";
import "bulma";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav class="level is-mobile is-size-5 py-2">
        <Link to = '/' class = "level-item has-text-centered">
          <button class="level-item has-text-centered has-text-weight-normal button is-white">Home</button>
        </Link>
        <Link to = '/me' class = "level-item has-text-centered">
          <button class="level-item has-text-centered has-text-weight-normal button is-white">About</button>
        </Link>
        <Link to = '/' class = "level-item has-text-centered">
          <button class="level-item has-text-centered has-text-weight-normal button is-white">Résumé</button>
        </Link>
        <Link to = '/' class = "level-item has-text-centered">
          <button class="level-item has-text-centered has-text-weight-normal button is-white">Contact</button>
        </Link>
        {/* <button class="level-item has-text-centered has-text-weight-normal button is-white">Projects</button> */}
      </nav>
    );
  }
}

export default Navbar;

