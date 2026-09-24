import "./SeparationSteps.css";

function SeparationSteps() {
  return (
    <section className="separation-steps">

      <h2>¿Cómo separar los residuos?</h2>

      <div className="separation-steps__container">

        <article className="separation-step">
          <div className="separation-step__number">1️⃣</div>
          <h3>Identifica</h3>
          <p>
            Reconoce qué tipo de residuo tienes antes de desecharlo.
          </p>
        </article>

        <article className="separation-step">
          <div className="separation-step__number">2️⃣</div>
          <h3>Separa</h3>
          <p>
            Evita mezclar residuos de diferentes categorías.
          </p>
        </article>

        <article className="separation-step">
          <div className="separation-step__number">3️⃣</div>
          <h3>Deposita</h3>
          <p>
            Coloca el residuo en el recipiente correspondiente.
          </p>
        </article>

        <article className="separation-step">
          <div className="separation-step__number">4️⃣</div>
          <h3>Dispón correctamente</h3>
          <p>
            Para residuos que requieren manejo especial, consulta los puntos
            de disposición disponibles.
          </p>
        </article>

      </div>

    </section>
  );
}

export default SeparationSteps;