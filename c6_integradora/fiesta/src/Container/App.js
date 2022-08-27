import ClassComponent from '../components/ClassComponent'
import FunctionComponent from '../components/FunctionComponent'


const listaDeInvitados = [
  {
    name: "Nicolás",
    bool: "true",
    tarea: "pizza"
  },
  {
    name: "Ivan",
    bool: "false",
    tarea: "bebidas"
  },
  {
    name: "Carolina",
    bool: "true",
    tarea: "pizza"
  }
]


function App() {
  return (
    <div className="App">
      <h3> Invitados: </h3>
      {listaDeInvitados.map((invitado, i) => <ClassComponent key={i} nombre={invitado.name} estaEnLista={invitado.bool} />)}

      <h3>Tareas: </h3>
      {listaDeInvitados.map((invitado, i) => <FunctionComponent key={i} props={invitado} />)}

    </div>
  );
}

export default App;
