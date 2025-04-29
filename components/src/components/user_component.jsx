// UserComponent muestra la información del usuario en un formato estructurado
// Recibe un objeto usuario como prop que contiene datos personales
// El componente muestra el nombre del usuario como encabezado
// Seguido por su correo electrónico y edad en párrafos separados
// Este componente se usa típicamente en secciones de perfil o listas de usuarios

// podemos hacer uso de la desestructuración para extraer las propiedades del objeto user
// y así evitar el uso de user.name, user.email y user.age
function UserComponent({ user }) {
  return (
    <div className="user-component">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserComponent;
