import { useState } from "react";

import "./chevron.styles.scss";

import plusIcon from "../../../assets/images/plus.svg";
import minusIcon from "../../../assets/images/minus.svg";

interface ChevronProps {
  title: string;
  content: string;
}

export function Chevron({ title, content }: ChevronProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenOrCloseChevron() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="chevron">
        <strong className="chevron__title">{title}</strong>
        <img
          className="chevron__icon"
          src={isOpen ? minusIcon : plusIcon}
          alt="Abrir"
          onClick={handleOpenOrCloseChevron}
          width="12px"
        />
      </div>
      {isOpen && (
        <p className="chevron__content animate__animated animate__fadeInDown">
          {content}
        </p>
      )}
    </>
  );
}
