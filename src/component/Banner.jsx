import React from "react";
import "bulma";
import Navbar from "./Navbar";

class Banner extends React.Component {
  render() {
    return (
      <div>
        <div class="hero-head">
          <Navbar/>
        </div>
      <section class="hero is-fullheight-with-navbar has-background-white-ter">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-size-1 ">Mehul Gaidhani</h1>
            <div class="subtitle is-size-6">
              <h2 >Designer | Developer | Researcher | Tech Enthusiast</h2>
              <i class="fa fa-long-arrow-alt-down mt-3 is-size-3" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default Banner;

