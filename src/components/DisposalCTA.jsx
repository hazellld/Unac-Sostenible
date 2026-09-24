import "./DisposalCTA.css";

function DisposalCTA() {
  return (
    <section className="disposal-cta">

      <h2>¿No sabes dónde llevarlo?</h2>

      <p>
        Consulta los puntos de disposición disponibles dentro del campus.
      </p>

      <a href="/puntos" className="disposal-cta__button">
        📍 Ver puntos de disposición
      </a>

    </section>
  );
}

export default DisposalCTA;