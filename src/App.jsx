import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InicioPage from './pages/InicioPage';
import ResiduosPage from './pages/ResiduosPage';
import PuntosPage from './pages/PuntosPage';
import AprendePage from './pages/AprendePage';
import ParticipaPage from './pages/ParticipaPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <Router>
      <header style={{ padding: '1rem', background: '#1b4332', color: '#fff' }}>
        <nav style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          {/* Solo las 5 páginas públicas en la barra de navegación */}
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
          <Link to="/residuos" style={{ color: 'white', textDecoration: 'none' }}>Gestión de Residuos</Link>
          <Link to="/puntos" style={{ color: 'white', textDecoration: 'none' }}>Puntos de Disposición</Link>
          <Link to="/aprende" style={{ color: 'white', textDecoration: 'none' }}>Aprende</Link>
          <Link to="/participa" style={{ color: 'white', textDecoration: 'none' }}>Participa</Link>
        </nav>
      </header>

      <main style={{ padding: '2rem' }}>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<InicioPage />} />
          <Route path="/residuos" element={<ResiduosPage />} />
          <Route path="/puntos" element={<PuntosPage />} />
          <Route path="/aprende" element={<AprendePage />} />
          <Route path="/participa" element={<ParticipaPage />} />

          {/* Ruta de Administración (Oculta del menú público) */}
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </Router>
  );
}