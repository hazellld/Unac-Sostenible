import './AboutSection.css';

// Short "what is this project" blurb, right after the Hero
export default function AboutSection() {
  return (
    <section className="about">
      <h2 className="about__title">¿Qué es UNAC Sostenible?</h2>
      <p className="about__text">
        UNAC Sostenible es una propuesta orientada a fortalecer el manejo adecuado
        de los residuos en la Corporación Universitaria Adventista, mediante
        estrategias educativas, comunicativas y tecnológicas al alcance de toda
        la comunidad universitaria.
      </p>
    </section>
  );
}