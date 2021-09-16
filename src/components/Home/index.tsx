import "animate.css";

import "./home.styles.scss";

import aurinoPhoto from "../../assets/images/aurino-geraldo.png";

export function Home() {
  return (
    <section id="home" className="home">
      <div className="animate__animated animate__bounceInLeft home__info">
        <h2 className="home__title">Eu sou web developer!</h2>
        <p className="home__paragraph">
          Salve salve galera meu nome é Aurino Junior atualmente sou
          desenvolvedor de software frontend e ...
        </p>
        <a className="home__button" href="#about">
          Leia mais
        </a>
      </div>
      <img
        className="animate__animated animate__bounceInRight home__img"
        src={aurinoPhoto}
        width="500px"
        alt="Foto Aurino Geraldo"
      />
    </section>
  );
}
