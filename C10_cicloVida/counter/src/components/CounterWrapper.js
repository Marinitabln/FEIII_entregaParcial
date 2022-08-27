import React, { Component } from "react";
import swal from "sweetalert";
import Counter from "./Counter";
import Start from "./Start";

class CounterWrapper extends Component {
  /* El constructor es llamado antes de montarse el componente. Si bien no es obligatorio, 
  es usado para iniciar el estado y enlazar manejadores de eventos a una instancia —en la 
  próxima clase hablaremos de estos eventos—. Al usar el constructor en una clase que 
  extiende React.Component deberá llamarse a super(props), de este modo, this.props quedará 
  definido en el constructor. */

  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      start: false
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleStartingReset = this.handleStartingReset.bind(this);
  }

  /* componentDidMount() --------------------------------------
Se invoca solo una vez cuando el componente se monta en el DOM —aparece en el HTML—. Este 
método no vuelve a ejecutarse, salvo que el componente se destruya/desmonte y vuelva a ser 
insertado/montado en el DOM. Es utilizado para realizar suscripciones —este tema lo veremos 
más adelante en el curso—. También es posible llamar a setState antes de que la pantalla se 
actualice. */

  componentDidMount() {
    console.log("El componente CounterWrapper se montó en el DOM");
  }

  /* componentDidUpdate() -------------------------------------
Es invocado ante cada actualización de state o props que suceda luego del renderizado inicial. 
Permite comparar valores previos con actuales y tomar decisiones en base a condiciones. */

  componentDidUpdate(_, prevState) {
    console.log("El componente CounterWrapper se ha actualizado");
    if (prevState.start !== this.state.start) {
      if (this.state === false) {
        console.log("El contador se ha reseteado");
        console.log("El componente Start se montó en el DOM");
        console.log("El componente Counter se desmontó del DOM");
      } else {
        console.log("El contador se ha reiniciado");
        console.log("El componente Start se montó en el DOM");
        console.log("El componente Counter se desmontó del DOM");
      }
    }

    if (prevState.count !== this.state.count && this.state.count === 0) {
      swal("Llegaste a cero").then(() => {
        this.handleStartingReset();
      });
    }
  }

  handleStartingReset() {
    this.setState((prevState) => {
      return {
        // esta linea la cambié porque sino sigue decrementando despues de llegar a cero
        //       ...prevState,
        count: 5,
        start: !prevState.start
      };
    });
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  /* render() ------------------------------------------------
es el único método obligatorio en un componente de clase. Render es una función pura, no 
interviene sobre el estado ni interactúa con el navegador, solo representará lo que reciba. 
Al ser llamado, examinará this.props y this.state e inmediatamente retornará alguna de las 
siguientes opciones:
* Elementos de React creados con JSX
* Arrays
* Fragments
* Portals (lo veremos más adelante)
* String, numbers, booleans o null */

  render() {
    return (
      <main>
        {this.state.start === true ? (
          <Counter
            decrement={this.handleDecrement}
            reset={this.handleStartingReset}
            count={this.state.count}
          />
        ) : (
          <Start starting={this.handleStartingReset} />
        )}
      </main>
    );
  }
}

export default CounterWrapper;
