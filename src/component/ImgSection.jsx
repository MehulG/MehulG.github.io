import React from "react";
import "bulma";
import "./../CSS/ImgSection.scss"

class ImgSection extends React.Component {

  placeItem(props){
    return(
      <div class="level-item has-text-centered">
        <div>
          <a href= {props.prop.link} target = "_blank">
          <figure class="image is-96x96">
            <img src = {props.prop.url} alt = {props.prop.text}/>
            {/* <figcaption>{props.prop.text}</figcaption> */}
          </figure>
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <section class="section">
          <h1 class="title pb-4">{this.props.prop.title}</h1>
          <h2 class="subtitle has-text-weight-light is-size-5">
            <div class="flex level">
              {this.props.prop.content.map(data => <this.placeItem prop = {data}/>)}
            </div>
          </h2>
        </section>
      </div>
    );
  }
}

export default ImgSection;

// this.props.prop.content