import "./EducationPage.css";

function EducationPage() {
  return (
    <main className="education-page">

      <header className="education-page__header">
        <h1 className="education-page__title">
          Aprende y Concientízate
        </h1>

        <p className="education-page__description">
          Conoce cómo tus decisiones diarias pueden contribuir a la
          prevención, reducción, reciclaje y reutilización de residuos
          dentro de la comunidad universitaria.
        </p>
      </header>

      <section className="education-page__section">
        <h2 className="education-page__section-title">
          Los 4 pilares de una gestión sostenible
        </h2>

        <div className="education-page__grid">

          <article className="education-page__card">
            <h3 className="education-page__card-title">
              🛡️ Prevención
            </h3>

            <p className="education-page__card-text">
              Evita generar residuos innecesarios desde el origen,
              tomando decisiones responsables antes de consumir.
            </p>
          </article>

          <article className="education-page__card">
            <h3 className="education-page__card-title">
              📉 Reducción
            </h3>

            <p className="education-page__card-text">
              Disminuye el consumo y la cantidad de residuos que
              generas mediante hábitos más sostenibles.
            </p>
          </article>

          <article className="education-page__card">
            <h3 className="education-page__card-title">
              ♻️ Reciclaje
            </h3>

            <p className="education-page__card-text">
              Separa correctamente los materiales aprovechables para
              facilitar su recuperación y transformación.
            </p>
          </article>

          <article className="education-page__card">
            <h3 className="education-page__card-title">
              🔄 Reutilización
            </h3>

            <p className="education-page__card-text">
              Busca nuevos usos para productos y materiales antes de
              convertirlos en residuos.
            </p>
          </article>

        </div>
      </section>

      <section className="education-page__section">
        <h2 className="education-page__section-title">
          ¿Cómo puedes contribuir?
        </h2>

        <div className="education-page__tips">

          <div className="education-page__tip">
            <strong>1. Previene</strong>
            <p>
              Evita productos y materiales que generen residuos
              innecesarios.
            </p>
          </div>

          <div className="education-page__tip">
            <strong>2. Reduce</strong>
            <p>
              Consume de manera responsable y disminuye el uso de
              productos desechables.
            </p>
          </div>

          <div className="education-page__tip">
            <strong>3. Reutiliza</strong>
            <p>
              Aprovecha nuevamente los objetos y materiales que todavía
              pueden tener utilidad.
            </p>
          </div>

          <div className="education-page__tip">
            <strong>4. Recicla</strong>
            <p>
              Separa los residuos correctamente y deposítalos en el
              lugar correspondiente.
            </p>
          </div>

        </div>
      </section>

      <section className="education-page__actions">
        <h2 className="education-page__section-title">
          Aprende a separar correctamente
        </h2>

        <p className="education-page__description">
          Conocer los tipos de residuos es el primer paso para realizar
          una separación adecuada dentro de la universidad.
        </p>

        <a
          href="/residuos"
          className="education-page__button"
        >
          Ver gestión de residuos
        </a>
      </section>

    </main>
  );
}

export default EducationPage;