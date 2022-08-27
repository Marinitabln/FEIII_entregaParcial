import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imHungryFor: "", 
      show: true
    };
  }

  cancelOrder = () => {
    this.setState({show: false});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({imHungryFor: "Pizzas"})
    }, 2000)
  }
  componentDidUpdate() {
    console.log("El componente se actualizó!");
  }
  render() {
    let myOrder;
    if (this.state.show) {
      myOrder = <Child food={this.state.imHungryFor}/>;
    };
    return (
      <div>
      {myOrder}
      <button type="button" onClick={this.cancelOrder}>Cancelar pedido.</button>
      </div>
    );
  }
}



ReactDOM.render(<Container />, document.getElementById('root'));