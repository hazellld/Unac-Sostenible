import { Link } from 'react-router-dom';
import './ActionCard.css';

// Reusable "quick access" card: icon + title + text + a link button
export default function ActionCard({ icon, title, text, to, linkLabel }) {
  return (
    <div className="action-card">
      <span className="action-card__icon">{icon}</span>
      <h3 className="action-card__title">{title}</h3>
      <p className="action-card__text">{text}</p>
      <Link to={to} className="action-card__link">
        {linkLabel}
      </Link>
    </div>
  );
}