import { Link } from 'react-router-dom';
import './CallToAction.css';

// Closing banner of the home page, before the Footer
export default function CallToAction() {
  return (
    <section className="cta">
      <h2 className="cta__title">El cambio empieza con pequeñas acciones.</h2>
      <p className="cta__text">
        Conoce, separa, reutiliza y participa en la construcción de una UNAC más sostenible.
      </p>
      <Link to="/residuos" className="cta__button">
        Explorar UNAC Sostenible
      </Link>
    </section>
  );
}