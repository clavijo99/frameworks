// Importamos useState desde React y los estilos y componentes necesarios
import { useState } from "react";
import "./App.css";
import Button from "./components/button";

// Componente principal App
function App() {
  // Declaramos el estado count y su función actualizadora setCount, iniciando en 0
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const increment = () => {
    // Actualizamos el estado usando la versión anterior
    setCount((prevCount) => prevCount + 1);
  };

  // Función para decrementar el contador
  const decrement = () => {
    // Validamos que el contador no sea negativo
    if (count === 0) {
      alert("No puede ser negativo");
      return;
    }
    // Actualizamos el estado restando 1
    setCount((prevCount) => prevCount - 1);
  };

  // Renderizamos el componente
  return (
    <>
      <div className="card">
        {/* Mostramos el valor del contador */}
        <p style={{ fontSize: "80px" }}>{count}</p>
        {/* Botones para decrementar e incrementar */}
        <Button style={{ marginRight: "10px" }} onClick={decrement} text="-" />
        <Button onClick={increment} text="+" />
      </div>
    </>
  );
}

// Exportamos el componente
export default App;
