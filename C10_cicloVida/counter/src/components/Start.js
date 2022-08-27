import React, { Component } from "react";

class Start extends Component {
  render() {
    return (
      <div className="Counter">
        <section className="controls">
          <button onClick={this.props.starting}>Iniciar</button>
        </section>
      </div>
    );
  }
}

export default Start;