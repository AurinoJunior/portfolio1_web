import "./contact.styles.scss";

import instagramImage from '../../assets/images/instagram.png'
import discordImage from '../../assets/images/discord.png'
import linkedinImage from '../../assets/images/linkedin.png'
import githubImage from '../../assets/images/github.png'
import { useState } from "react";

export function Contact() {
  const [discordText, setDiscordText] = useState('Aurigod#4050')


  function handleCopyDiscordId(){
    navigator.clipboard.writeText(discordText)
    setDiscordText('Copiado')

    setTimeout(() => {
      setDiscordText('Aurigod#4050')
    }, 2000)
  }


  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contatos</h2>
      <div className="contact__content">
        <a className="contact__item" href="https://www.instagram.com/aurigod97/">
          <img src={instagramImage} alt="Instagram" width="64"/>
          <span>Instagram</span>
        </a>

        <div className="contact__item" onClick={handleCopyDiscordId}>
          <img src={discordImage} alt="Discord" width="64"/>
          <span className={discordText === 'Copiado' ? 'item-copy' : ''}>{discordText}</span>
        </div>

        <a className="contact__item" href="https://www.linkedin.com/in/aurino-junior-7718a4158/">
          <img src={linkedinImage} alt="Linkedin" width="64"/>
          <span>Linkedin</span>
        </a>
        <a className="contact__item" href="https://github.com/AurinoJunior">
          <img src={githubImage} alt="Github" width="64"/>
          <span>Github</span>
        </a>
      </div>
      <h3 className="contact__email">Email: aurinoaj@gmail.com</h3>
    </section>
  );
}
