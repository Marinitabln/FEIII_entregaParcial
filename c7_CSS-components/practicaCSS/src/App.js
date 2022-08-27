import React from "react";

class App extends React.Component {
  render() {
 
    const saludos = ["HOLA", "HOLA", "HOLA", "MUNDO"]

    return (
    <div>
    {saludos.map((saludo, i) => 
      <h1 key={i} style={{
        color:`blue`,
        textAlign: `center`
      }}>{saludo}</h1>
    )}  
    </div>
    )
  }
}

export default App;