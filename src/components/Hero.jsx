import { Link } from 'react-router-dom';
import './Hero.css';

// Landing hero: introduces the project and links to the two main actions
export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">UNAC Sostenible</h1>
      <p className="hero__subtitle">
        Construyamos juntos una universidad más consciente con nuestros residuos.
      </p>

      <div className="hero__actions">
        <Link to="/puntos" className="hero__button hero__button--primary">
          📍 Ver puntos de disposición
        </Link>
        <Link to="/educacion" className="hero__button hero__button--secondary">
          📚 Aprender sobre residuos
        </Link>
      </div>
    </section>
  );
}