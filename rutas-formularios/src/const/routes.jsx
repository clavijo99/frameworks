import { Routes, Route } from "react-router";
import PrivateRoute from "../components/privateRoute";
import { Home, About, Contact, Login } from "../pages/index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />

      {/* Rutas privadas */}
      <Route
        path="/panel"
        element={
          <PrivateRoute>
            <h1>Hola desde el panel</h1>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
