import React, { Component } from "react";

class Producto extends Component {
  render() {
    return (
      <div >
        <p>{this.props.menu}</p>
        <section>
          <button onClick={this.props.reset}>Cancelar</button>
        </section>
      </div>
    );
  }
}

export default Producto;