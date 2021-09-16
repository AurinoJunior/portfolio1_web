import "./about.styles.scss";

import { Chevron } from "./chevron";

export function About() {
  return (
    <section id="about" className="about">
      <h2 className="about__title">Sobre</h2>
      <p className="about__paragraph">
        Salve salve galera meu nome é Aurino Junior atualmente sou desenvolvedor
        web front-end no GetNinjas, me formei em ciência da computação em 2019 e
        desde então tenho desbravado esse mundo da programação web, metodologias
        ágeis e cultura devops.
      </p>
      <p className="about__paragraph">
        Bom espero conseguir compartilhar um pouco dos meus estudos com vocês e
        aprender bastante durantes esse processo, bora aprender juntos 🚀🚀
      </p>

      <div className="about__info__content">
        <div className="about__personal_data">
          <h3>Dados pessoais</h3>
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

        <div className="about__skills">
          <h3>Habilidades</h3>
          <div className="about__skills__content">
            <Chevron
              title="Front-end"
              content="HTML5, CSS, Javascript (ReactJs, NextJS), Typescript."
            />
            <Chevron title="Back-end" content="NodeJs, PHP." />
            <Chevron title="Infraestrutura" content="Docker, AWS, Linux." />
            <Chevron title="Interface" content="Photoshop, Figma." />
            <Chevron title="Projeto" content="Scrum, Kanban." />
          </div>
        </div>
      </div>
    </section>
  );
}
