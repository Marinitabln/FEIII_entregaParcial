import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <p className="count">{this.props.count}</p>
        <section className="controls">
          <button onClick={this.props.decrement}>Decrementar</button>
          <button onClick={this.props.reset}>Reiniciar</button>
        </section>
      </div>
    );
  }
}

export default Counter;