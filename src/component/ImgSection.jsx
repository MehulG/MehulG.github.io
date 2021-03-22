import React from "react";
import "bulma";
import "./../CSS/ImgSection.scss"

class ImgSection extends React.Component {

  placeItem(props){
    return(
      <a href={props.prop.link} target = "_blank" rel="noreferrer" class = "text-decor-none">
        <div class="card m-2 ">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img src={props.prop.url} alt={props.prop.text}/>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-6">{props.prop.text}</p>
                <p class="subtitle is-size-7">{props.prop.position}</p>
              </div>
            </div>
          </div>
      </div>
     </a>
    );
  }

  render() {
    return (
      <div>
        <section class="section">
          <h1 class="title pb-4">{this.props.prop.title}</h1>
          <h2 class="subtitle has-text-weight-light is-size-5">
            <div class="flex">
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