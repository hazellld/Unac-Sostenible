import './PillarCard.css';

// Single reusable card for one of the 4 pillars (or similar icon+title+text content)
export default function PillarCard({ icon, title, text }) {
  return (
    <div className="pillar-card">
      <span className="pillar-card__icon">{icon}</span>
      <h3 className="pillar-card__title">{title}</h3>
      <p className="pillar-card__text">{text}</p>
    </div>
  );
}