import React, { Component } from "react";
import swal from "sweetalert";
//import Producto from "./Producto";
import Cancelar from "./Cancelar";

class Pedido extends Component {

    constructor(props) {
        super(props);
        this.state = {
          menu: "",
          estaCargada: false
        };
        this.cargarOrden = this.cargarOrden.bind(this);
        this.cancelarOrden = this.cancelarOrden.bind(this);
      }

      componentDidMount() {
        setTimeout(() => {
            this.setState({menu: "Pizza"})
          }, 2000)
        console.log("El componente Pedido se montó en el DOM", this.props.me);
      }

      componentDidUpdate(prevProps, prevState) {
        console.log("El componente Pedido se ha actualizado");
        if (prevState.estaCargada !== this.state.estaCargada) {
          if (this.state === false) {
            console.log("El pedido se ha cancelado");
            console.log("El componente Cancelar se montó en el DOM");
            console.log("El componente Producto se desmontó del DOM");
          } else {
            console.log("El pedido se ha cargado");
            console.log("El componente Cancelar se montó en el DOM");
            console.log("El componente Producto se desmontó del DOM");
          }
        }
    
        if (prevState.menu !== this.state.menu && this.state.menu === "") {
          swal("El pedido fue cancelado").then(() => {
            this.cancelarOrden();
          });
        }
      }

      cancelarOrden() {
        this.setState((prevState) => {
          return {
            menu: "",
            estaCargada: !prevState.estaCargada
          };
        });
      }
    
      cargarOrden() {
        this.setState({ 
            menu: this.state.menu
         });
      }
    

    render() {
    return (
      <main>
        <h2>Tu pedido: {this.props.menu} </h2>
        {/* {this.state.estaCargada === true ? (
          <Producto
            cargado={this.cargarOrden}
            cancelado={this.cancelarOrden}
            menu={this.state.menu}
          />
        ) : (
          <Cancelar cancelado={this.cancelarOrden} />
        )} */}
        <Cancelar />
      </main>
    );
  }
}

export default Pedido;