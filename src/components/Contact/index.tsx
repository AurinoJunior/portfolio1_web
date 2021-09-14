import "./contact.styles.scss";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contatos</h2>
      <div className="contact__content">
        <div className="contact__item">
          <img src="https://via.placeholder.com/80" alt="Instagram" />
          <span>Instagram</span>
        </div>
        <div className="contact__item">
          <img src="https://via.placeholder.com/80" alt="Discord" />
          <span>Discord</span>
        </div>
        <div className="contact__item">
          <img src="https://via.placeholder.com/80" alt="Linkedin" />
          <span>Linkedin</span>
        </div>
        <div className="contact__item">
          <img src="https://via.placeholder.com/80" alt="Github" />
          <span>Github</span>
        </div>
      </div>
    </section>
  );
}
