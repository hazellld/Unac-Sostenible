import ActionCard from './ActionCard';
import './ActionsSection.css';

// The 3 main things a visitor can do on the platform
const actions = [
  {
    icon: '📍',
    title: 'Encuentra un punto',
    text: 'Consulta los puntos de disposición disponibles dentro del campus.',
    to: '/puntos',
    linkLabel: 'Ver puntos',
  },
  {
    icon: '📚',
    title: 'Aprende',
    text: 'Conoce buenas prácticas para prevenir, reducir, reciclar y reutilizar residuos.',
    to: '/educacion',
    linkLabel: 'Aprender',
  },
  {
    icon: '💡',
    title: 'Participa',
    text: 'Comparte ideas o reporta situaciones relacionadas con el manejo de residuos.',
    to: '/participa',
    linkLabel: 'Participar',
  },
];

export default function ActionsSection() {
  return (
    <section className="actions">
      <h2 className="actions__title">¿Qué puedes hacer?</h2>
      <div className="actions__grid">
        {actions.map((action) => (
          <ActionCard key={action.title} {...action} />
        ))}
      </div>
    </section>
  );
}