import "./about.styles.scss";

export function About() {
  return (
    <section className="about">
      <h2 className="about__title">Sobre</h2>
      <p className="about__paragraph">
        Salve salve galera meu nome é Aurino Junior atualmente sou desenvolvedor
        de software frontend e trabalho no GetNinjas, me formei em ciência da
        computação em 2019 e desde então tenho desbravado esse mundo da
        programação web, metodologias ágeis e cultura devops.
      </p>
      <p className="about__paragraph">
        Bom espero conseguir compartilhar um pouco dos meus estudos com vocês e
        aprender bastante durantes esse processo, bora aprender juntos \o/.
      </p>

      <div className="about__info__container">
        <div className="about__personal_data">
          <h3 className="about__personal_data__title">Dados pessoais</h3>
          <ul>
            <li>
              <b>Nome:</b> Aurino A Geraldo Junior.
            </li>
            <li>
              <b>Nacionalidade:</b> Brasileiro.
            </li>
            <li>
              <b>Nascimento:</b> 07.10.1997.
            </li>
            <li>
              <b>Endereço:</b> São Paulo, SP - Brasil.
            </li>
            <li>
              <b>Ocupação:</b> Desenvolvedor Frontend.
            </li>
          </ul>
        </div>

        <div className="about__interests">
          <h3 className="about__interests__title">Interesses</h3>
          <div className="about__interests__images">
            <img
              className="interests__images__item"
              src="https://via.placeholder.com/32"
              alt=""
            />
            <img
              className="interests__images__item"
              src="https://via.placeholder.com/32"
              alt=""
            />
            <img
              className="interests__images__item"
              src="https://via.placeholder.com/32"
              alt=""
            />
            <img
              className="interests__images__item"
              src="https://via.placeholder.com/32"
              alt=""
            />
            <img
              className="interests__images__item"
              src="https://via.placeholder.com/32"
              alt=""
            />
            <img
              className="interests__images__item"
              src="https://via.placeholder.com/32"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
