import { useState } from "react";
import "animate.css";

import "./menu.styles.scss";

import closeIcon from "../../assets/images/close.svg";
import menuIcon from "../../assets/images/menu.svg";

export function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleChangeStateMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <>
      <img
        className={menuIsOpen ? "menu__close" : "menu__open"}
        src={menuIsOpen ? closeIcon : menuIcon}
        alt="Fechar"
        onClick={handleChangeStateMenu}
        width="32px"
      />

      {menuIsOpen && (
        <aside className="menu">
          <div className="menu__content animate__animated animate__slideInRight">
            <nav className="menu__nav">
              <a className="menu__nav__item" href="#home">
                Inicio
              </a>
              <a className="menu__nav__item" href="#about">
                Sobre
              </a>
              {/* <a className="menu__nav__item" href="#projects">
                Projeto
              </a> */}
              <a className="menu__nav__item" href="#career">
                Carreira
              </a>
              <a className="menu__nav__item" href="#contact">
                Contatos
              </a>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
}
