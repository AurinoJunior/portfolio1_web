import "./header.styles.scss";

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">Aurino Geraldo</h1>

          <nav className="header__menu">
            <a className="header__menu__item" href="/">
              Sobre
            </a>
            <a className="header__menu__item" href="/">
              Projeto
            </a>
            <a className="header__menu__item" href="/">
              Carreira
            </a>
            <a className="header__menu__item" href="/">
              Contato
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
