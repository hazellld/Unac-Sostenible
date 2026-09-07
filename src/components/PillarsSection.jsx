import PillarCard from './PillarCard';
import './PillarsSection.css';

// The 4 pillars of the project, driven from a local data array
const pillars = [
  {
    icon: '🛡️',
    title: 'Prevención',
    text: 'Evitar la generación innecesaria de residuos desde el origen.',
  },
  {
    icon: '📉',
    title: 'Reducción',
    text: 'Disminuir el consumo y la cantidad de residuos generados.',
  },
  {
    icon: '♻️',
    title: 'Reciclaje',
    text: 'Separar y aprovechar materiales que pueden reincorporarse a procesos productivos.',
  },
  {
    icon: '🔄',
    title: 'Reutilización',
    text: 'Dar nuevos usos a productos y materiales antes de desecharlos.',
  },
];

export default function PillarsSection() {
  return (
    <section className="pillars">
      <h2 className="pillars__title">Nuestros 4 pilares</h2>
      <div className="pillars__grid">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.title} {...pillar} />
        ))}
      </div>
    </section>
  );
}