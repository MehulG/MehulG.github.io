import React from "react";
import "bulma";
import {Link} from 'react-router-dom';
import Pdf from './../Data/resume.pdf';

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
        <a href = {Pdf} class = "level-item has-text-centered" target = "_blank">
          <button class="level-item has-text-centered has-text-weight-normal button is-white">Résumé</button>
        </a>
        <Link to = '/' class = "level-item has-text-centered">
          <button class="level-item has-text-centered has-text-weight-normal button is-white">Contact</button>
        </Link>
        {/* <button class="level-item has-text-centered has-text-weight-normal button is-white">Projects</button> */}
      </nav>
    );
  }
}

export default Navbar;

