

function itemCount () {
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
        <div className="chartContainer">
          <h1 className="titleCarrito">CARRITO DE COMPRAS</h1>
          <h2 className="contador">{contador}</h2>
          <button onClick={() => setContador(contador + 1)}>SUMAR</button>
          <button onClick={restar}>RESTAR</button>
          <button onClick={() => setContador(0)}>RESET</button>
          <button onClick={onAdd}>Agregar al carrito 🛒</button>
        </div>
      </>
    );
  }

export default itemCount

