import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WasteManagementPage from './pages/WasteManagementPage';
import DisposalPointsPage from './pages/DisposalPointsPage';
import EducationPage from './pages/EducationPage';
import ParticipatePage from './pages/ParticipatePage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/residuos" element={<WasteManagementPage />} />
          <Route path="/puntos" element={<DisposalPointsPage />} />
          <Route path="/educacion" element={<EducationPage />} />
          <Route path="/participa" element={<ParticipatePage />} />

          {/* Ruta de Administración (Oculta del menú público) */}
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}