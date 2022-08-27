import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            
                <li>{this.props.nombre} {this.props.estaEnLista ?  "está" : "no está"} invitado a la fiesta</li>
            
        )
    }
}