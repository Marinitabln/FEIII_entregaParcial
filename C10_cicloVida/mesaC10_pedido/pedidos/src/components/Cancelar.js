import React, { Component } from "react";

class Cancelar extends Component {
  render() {
    return (
      <div>
        <section>
          <button onClick={this.props.cancelarOrden}>Cancelar pedido</button>
        </section>
      </div>
    );
  }
}

export default Cancelar;