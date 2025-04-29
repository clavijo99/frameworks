// Componente Button
// Este es un componente de botón reutilizable que acepta:
// - onClick: función que se ejecuta al hacer clic
// - text: texto que se muestra en el botón
// - style: estilos CSS para personalizar el botón

const Button = ({ onClick, text, style }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
