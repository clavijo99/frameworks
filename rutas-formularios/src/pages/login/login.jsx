import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Revisar si hay token al cargar
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  function handleLogin(event) {
    event.preventDefault(); // prevenir recarga
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Datos enviados:", data);

    // Simular autenticación exitosa
    localStorage.setItem("token", "mi_token_falso");
    setIsAuthenticated(true);
    navigate("/panel"); // redirigir si quieres
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login"); // redirigir al login
  }

  return (
    <div className="login">
      {!isAuthenticated ? (
        <>
          <h1>Login</h1>
          <form
            onSubmit={handleLogin}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "300px",
            }}
          >
            <input
              name="username"
              type="text"
              placeholder="Username"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <>
          <h1>Ya estás autenticado</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      )}
    </div>
  );
}

export default Login;
