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

    <details className="education-page__tip">
      <summary>
        <span className="education-page__tip-title">
          1. Previene
        </span>

        <span className="education-page__tip-preview">
          Evita productos y materiales que generen residuos innecesarios.
        </span>
      </summary>

      <div className="education-page__tip-content">
        <h4>¿Qué significa prevenir?</h4>

        <p>
          Prevenir significa evitar la generación de residuos antes de que
          estos aparezcan. Es la primera acción dentro del manejo sostenible
          de los residuos, ya que busca disminuir desde el origen aquello
          que posteriormente tendría que ser desechado.
        </p>

        <h4>¿Cómo puedes hacerlo?</h4>

        <ul>
          <li>
            Evita productos de un solo uso cuando existan alternativas
            reutilizables.
          </li>
          <li>
            Planifica tus compras para evitar adquirir productos innecesarios.
          </li>
          <li>
            Prefiere productos que tengan poco empaque o empaques reutilizables.
          </li>
          <li>
            Lleva contigo elementos reutilizables como botellas, vasos o
            recipientes.
          </li>
        </ul>

        <h4>En la universidad</h4>

        <p>
          Puedes prevenir residuos llevando tu propia botella de agua,
          evitando impresiones innecesarias y utilizando materiales que
          realmente necesites para tus actividades académicas.
        </p>
      </div>
    </details>


    <details className="education-page__tip">
      <summary>
        <span className="education-page__tip-title">
          2. Reduce
        </span>

        <span className="education-page__tip-preview">
          Consume de manera responsable y disminuye el uso de productos
          desechables.
        </span>
      </summary>

      <div className="education-page__tip-content">
        <h4>¿Qué significa reducir?</h4>

        <p>
          Reducir consiste en disminuir el consumo de productos y recursos
          para generar una menor cantidad de residuos. Implica analizar
          nuestros hábitos y buscar formas de utilizar únicamente lo necesario.
        </p>

        <h4>¿Cómo puedes hacerlo?</h4>

        <ul>
          <li>
            Reduce el uso de productos desechables.
          </li>
          <li>
            Evita imprimir documentos cuando puedas utilizar formatos digitales.
          </li>
          <li>
            Utiliza solo la cantidad de recursos que realmente necesitas.
          </li>
          <li>
            Prefiere productos duraderos frente a productos de corta duración.
          </li>
        </ul>

        <h4>En la universidad</h4>

        <p>
          Reducir puede aplicarse al consumo de papel, agua, energía,
          materiales académicos y productos utilizados diariamente dentro
          del campus.
        </p>
      </div>
    </details>


    <details className="education-page__tip">
      <summary>
        <span className="education-page__tip-title">
          3. Reutiliza
        </span>

        <span className="education-page__tip-preview">
          Aprovecha nuevamente los objetos y materiales que todavía pueden
          tener utilidad.
        </span>
      </summary>

      <div className="education-page__tip-content">
        <h4>¿Qué significa reutilizar?</h4>

        <p>
          Reutilizar significa utilizar nuevamente un producto o material
          antes de convertirlo en residuo. Su objetivo es prolongar la vida
          útil de los objetos y reducir la necesidad de consumir nuevos
          recursos.
        </p>

        <h4>¿Cómo puedes hacerlo?</h4>

        <ul>
          <li>
            Utiliza nuevamente envases y recipientes que estén en buen estado.
          </li>
          <li>
            Reutiliza hojas de papel cuando sea posible.
          </li>
          <li>
            Busca nuevos usos para materiales que ya no necesites.
          </li>
          <li>
            Comparte, intercambia o dona objetos que todavía puedan utilizarse.
          </li>
        </ul>

        <h4>En la universidad</h4>

        <p>
          Algunos materiales académicos, recipientes, cajas y otros objetos
          pueden tener una segunda utilidad dentro de las actividades
          universitarias antes de ser descartados.
        </p>
      </div>
    </details>


    <details className="education-page__tip">
      <summary>
        <span className="education-page__tip-title">
          4. Recicla
        </span>

        <span className="education-page__tip-preview">
          Separa los residuos correctamente y deposítalos en el lugar
          correspondiente.
        </span>
      </summary>

      <div className="education-page__tip-content">
        <h4>¿Qué significa reciclar?</h4>

        <p>
          Reciclar consiste en separar adecuadamente los residuos que pueden
          ser aprovechados para facilitar su recuperación y transformación
          en nuevos materiales o productos.
        </p>

        <h4>¿Cómo puedes hacerlo?</h4>

        <ul>
          <li>
            Identifica qué tipo de residuo estás generando.
          </li>
          <li>
            Separa los materiales aprovechables de los demás residuos.
          </li>
          <li>
            Deposita cada residuo en el recipiente correspondiente.
          </li>
          <li>
            Evita mezclar materiales aprovechables con residuos contaminados.
          </li>
        </ul>

        <h4>En la universidad</h4>

        <p>
          Utiliza correctamente los puntos de disposición disponibles en el
          campus y consulta la sección de gestión de residuos para conocer
          cómo separar cada tipo de material.
        </p>
      </div>
    </details>

  </div>
</section>

    </main>
  );
}

export default EducationPage;