import "./Career.styles.scss";

import { CareerDetails } from "./CareerDetails/index";
import CareerData from "../../data/CareerData";

export function Career() {
  const { catho, unip, getninjas, ensinoMedio } = CareerData;

  return (
    <section id="career" className="career">
      <h2 className="career__title">Carreira</h2>
      <div className="career__container">
        <div className="career__professional">
          <h3>Profissional</h3>
          <CareerDetails
            title={catho.title}
            description={catho.description}
            dateStart={catho.dateStart}
            dateEnd={catho.dateEnd}
          />
          <CareerDetails
            title={getninjas.title}
            description={getninjas.description}
            dateStart={getninjas.dateStart}
          />
        </div>
        <div className="career__schooling">
          <h3>Estudo</h3>
          <CareerDetails
            title={unip.title}
            description={unip.description}
            dateStart={unip.dateStart}
            dateEnd={unip.dateEnd}
          />

          <CareerDetails
            title={ensinoMedio.title}
            description={ensinoMedio.description}
            dateStart={ensinoMedio.dateStart}
            dateEnd={ensinoMedio.dateEnd}
          />
        </div>
      </div>
    </section>
  );
}
