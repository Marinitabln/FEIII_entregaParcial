import React, { useEffect, useState } from 'react';
import Child from './Child';

const ContainerF = () =>{
  const [imHungryFor, setImHungryFor] = useState("");
  const [show, setShow] = useState(true);


  useEffect(()=>{
    setTimeout(() => {
      setImHungryFor("Pizzas")
    }, 2000);
  },[])

  useEffect(()=>{
    console.log("El componente se actualizó!");
  },[imHungryFor])

 
  const cancelOrder = () => {
    setShow(false);
    alert("Tu pedido ha sido cancelado.")
  }
 
  const newOrder = () => {
      setShow(true);      
  }
 return (    
      <div>
      {(show)? <Child food={imHungryFor} /> : <button type="button" onClick={newOrder}>Cargar nuevo pedido.</button>}
      {(show)? <button type="button" onClick={cancelOrder}>Cancelar pedido.</button> : ""}
      </div>
  )
}

export default ContainerF;