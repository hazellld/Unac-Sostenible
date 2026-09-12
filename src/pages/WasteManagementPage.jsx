import "./WasteManagementPage.css";

import SeparationSteps from "../components/SeparationSteps";

import DisposalCTA from "../components/DisposalCTA";

function WasteManagementPage() {
  return (
    <main className="waste-management">

      <header className="waste-management__header">
        <h1 className="waste-management__title">
          Gestión de Residuos
        </h1>

        <p className="waste-management__description">
          Aprende a identificar, separar y manejar correctamente los residuos
          dentro de la comunidad universitaria.
        </p>
      </header>

      <section>
        <h2 className="waste-management__title">
          Tipos de Residuos
        </h2>

        <p className="waste-management__description">
          Conoce los principales tipos de residuos y cómo identificarlos para
          realizar una separación adecuada.
        </p>

        <div className="waste-management__grid">

          <article className="waste-management__card">
            <h3 className="waste-management__card-title">
              ♻️ Aprovechables
            </h3>

            <p className="waste-management__card-text">
              Residuos que pueden ser recuperados y transformados para volver
              a utilizarse como materia prima.
            </p>

            <h4>Ejemplos:</h4>
            <ul>
              <li>Papel</li>
              <li>Cartón</li>
              <li>Plástico</li>
              <li>Vidrio</li>
              <li>Metales</li>
            </ul>
          </article>

          <article className="waste-management__card">
            <h3 className="waste-management__card-title">
              🌱 Orgánicos
            </h3>

            <p className="waste-management__card-text">
              Residuos provenientes principalmente de alimentos y otros
              materiales biodegradables.
            </p>

            <h4>Ejemplos:</h4>
            <ul>
              <li>Restos de comida</li>
              <li>Cáscaras</li>
              <li>Residuos vegetales</li>
            </ul>
          </article>

          <article className="waste-management__card">
            <h3 className="waste-management__card-title">
              🗑️ No aprovechables
            </h3>

            <p className="waste-management__card-text">
              Residuos que por sus características o contaminación no pueden
              ser aprovechados mediante procesos convencionales de reciclaje.
            </p>

            <h4>Ejemplos:</h4>
            <ul>
              <li>Algunos residuos sanitarios</li>
              <li>Materiales contaminados</li>
              <li>Otros residuos no recuperables</li>
            </ul>
          </article>

          <article className="waste-management__card">
            <h3 className="waste-management__card-title">
              🔋 Peligrosos / RAEE
            </h3>

            <p className="waste-management__card-text">
              Residuos que requieren un manejo especial debido a sus
              características o a los componentes que contienen.
            </p>

            <h4>Ejemplos:</h4>
            <ul>
              <li>Pilas</li>
              <li>Aparatos electrónicos</li>
              <li>Equipos eléctricos en desuso</li>
            </ul>
          </article>

        </div>
      </section>

      <SeparationSteps />

      <DisposalCTA />

    </main>
  );
}

export default WasteManagementPage;