import { NavLink } from 'react-router-dom';
import './Navbar.css';

// Reusable navigation bar shown on every public page
export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        🌱 UNAC Sostenible
      </NavLink>

      <nav className="navbar__links">
        <NavLink to="/" end className="navbar__link">Inicio</NavLink>
        <NavLink to="/residuos" className="navbar__link">Gestión de Residuos</NavLink>
        <NavLink to="/puntos" className="navbar__link">Puntos de Disposición</NavLink>
        <NavLink to="/educacion" className="navbar__link">Educación</NavLink>
        <NavLink to="/participa" className="navbar__link">Participa</NavLink>
      </nav>
    </header>
  );
}