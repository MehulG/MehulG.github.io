import React from "react";
import "bulma";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="level is-mobile is-size-5 py-2">
        <button class="level-item has-text-centered has-text-weight-normal button is-white">Home</button>
        <button class="level-item has-text-centered has-text-weight-normal button is-white">Résumé</button>
        <button class="level-item has-text-centered has-text-weight-normal button is-white">Projects</button>
        <button class="level-item has-text-centered has-text-weight-normal button is-white">Contact</button>
      </nav>
    );
  }
}

export default Navbar;

