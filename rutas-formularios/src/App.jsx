import "./App.css";
import { BrowserRouter, Link } from "react-router"; // ✅ react-router-dom
import Routes from "./const/routes"; // ✅ react-router-dom
function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
        <main>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
