import { useState } from "react";
import "animate.css";

import "./header.styles.scss";

import closeIcon from "../../assets/images/close.svg";
import menuIcon from "../../assets/images/menu.svg";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleChangeStateMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <>
      <img
        className={menuIsOpen ? "header__close" : "header__open"}
        src={menuIsOpen ? closeIcon : menuIcon}
        alt="Fechar"
        onClick={handleChangeStateMenu}
      />

      {menuIsOpen && (
        <header className="header">
          <div className="header__content animate__animated animate__slideInRight">
            <nav className="header__menu">
              <a className="header__menu__item" href="#home">
                Inicio
              </a>
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
      )}
    </>
  );
}
