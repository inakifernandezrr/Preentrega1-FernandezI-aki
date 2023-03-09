import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const restar = () => {
    if (contador < 1) {
      alert("no se pueden agregar cantidades negativas");
    } else {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    console.log("Agregado al carrito");
  };

  return (
    <>
      <h1>CARRITO DE COMPRAS</h1>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>SUMAR</button>
      <button onClick={restar}>RESTAR</button>
      <button onClick={() => setContador(0)}>RESET</button>
      <button onClick={onAdd}>Agregar al carrito 🛒</button>
    </>
  );
}

export default App;
