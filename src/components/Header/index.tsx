import "./header.styles.scss";

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <h1 className="header__title">
            <a href="#home">Aurino Geraldo</a>
          </h1>

          <nav className="header__menu">
            <a className="header__menu__item" href="#about">
              Sobre
            </a>
            <a className="header__menu__item" href="#projects">
              Projeto
            </a>
            <a className="header__menu__item" href="#career">
              Carreira
            </a>
            <a className="header__menu__item" href="#contact">
              Contatos
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
