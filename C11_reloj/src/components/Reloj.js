import { useEffect, useState } from "react";

const Reloj = () => {
  const [hora, setHora] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    console.log("se monto el reloj hora");
  }, []);

  return <h2>{hora}</h2>;
};
export default Reloj;
