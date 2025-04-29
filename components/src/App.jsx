// Importar los estilos CSS
import "./App.css";

// Importar el componente de Usuario
import User from "./components/user_component";

function App() {
  // Crear un objeto que contiene la información del usuario
  // con propiedades como nombre, correo y edad
  const user = {
    name: "John Doe",
    email: "john@gmail.com",
    age: 30,
  };

  return (
    <>
      {/* Renderizar el componente User pasándole el objeto user como prop */}
      <User user={user} />
    </>
  );
}

// Exportar el componente App para poder utilizarlo en otros archivos
export default App;
