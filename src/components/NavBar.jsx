import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="logo">
          KineLab Academy®
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Inicio
          </NavLink>
          <NavLink to="/category/cursos" className="nav-link">
            Cursos
          </NavLink>
          <NavLink to="/category/ebook" className="nav-link">
            eBooks
          </NavLink>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
