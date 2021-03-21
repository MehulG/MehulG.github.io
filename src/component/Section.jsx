import React from "react";
import "bulma";

class Section extends React.Component {

  newLineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }


  render() {
    return (
      <div>
        <section class="section">
          <h1 class="title pb-4">{this.props.prop.title}</h1>
          <h2 class="subtitle has-text-weight-light is-size-5"><this.newLineText text = {this.props.prop.content}/></h2>
        </section>
      </div>
    );
  }
}

export default Section;

