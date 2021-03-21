import React from "react";
import "bulma";

class Section extends React.Component {
  render() {
    return (
      <div>
        <section class="section">
          <h1 class="title">{this.props.prop.title}</h1>
          <h2 class="subtitle">{this.props.prop.content}</h2>
        </section>
      </div>
    );
  }
}

export default Section;

