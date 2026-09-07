import './Footer.css';

// Simple footer shown on every public page
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__brand">🌱 UNAC Sostenible</p>
      <p className="footer__text">
        Proyecto de gestión de residuos — Corporación Universitaria Adventista (UNAC)
      </p>
      <p className="footer__copy">© {currentYear} Hazel Camargo & Arvey Gaviria</p>
    </footer>
  );
}