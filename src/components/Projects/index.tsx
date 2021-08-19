import "./projects.styles.scss";

import { Card } from "./card";

export function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">Projetos</h2>
      <p className="projects__paragraph">
        Esses são alguns dos meus principais projetos.
      </p>
      <div className="projects__grid">
        <Card
          url="#home"
          image="https://via.placeholder.com/400x250"
          alt="Projeto 1"
        />
        <Card
          url="#"
          image="https://via.placeholder.com/400x250"
          alt="Projeto 1"
        />
        <Card
          url="#"
          image="https://via.placeholder.com/400x250"
          alt="Projeto 1"
        />
        <Card
          url="#"
          image="https://via.placeholder.com/400x250"
          alt="Projeto 1"
        />
      </div>
    </section>
  );
}
