import "bulma";
import Navbar from "./../component/Navbar";
import * as data from "./../Data/data.json";

function About() {
  return (
    <div>
    <div class="hero-head">
      <Navbar/>
    </div>
      <section class="hero is-fullheight-with-navbar has-background-white-ter">
        <div class="hero-body is-align-content-flex-start">
          <div class="container">
            <h1 class="title is-size-2">{data.intro.title}</h1>
            <div class="subtitle is-size-5 mt-4">
              {data.intro.content.map(
                  para => <div>{para} <br/> <br/></div>)}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default About;

