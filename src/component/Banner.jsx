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
                <h2 class = "mt-3">
                  <a href="https://github.com/mehulg" target = "_blank">
                    <i class="fab fa-github is-size-3 mx-3 has-text-black"></i>
                  </a>
                  <a href="https://linkedin.com/in/mmmehulll" target = "_blank">
                    <i class="fab fa-linkedin is-size-3 mx-3 has-text-black"></i>
                  </a>
                  <a href="https://twitter.com/mmmehulll" target = "_blank">
                    <i class="fab fa-twitter is-size-3 mx-3 has-text-black"></i>
                  </a>
                </h2>
                {/* <i class="fa fa-long-arrow-alt-down mt-3 is-size-3" aria-hidden="true"></i> */}
              </div>
            </div>
          </div>
        </section>
    </div>
    );
  }
}

export default Banner;

