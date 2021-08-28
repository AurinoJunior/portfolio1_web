import "./header.styles.scss";

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">Aurino Geraldo</h1>

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
              Contato
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
