import React from "react";
import style from "./Footer.module.css"
import LinkFooter from "./LinkFooter"
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={style.PieDePagina}>
      <LinkFooter icono={faEnvelope} texto="Contactanos" />
      <LinkFooter icono={faShare} texto="Compartir" />
    </footer>
  );
};



export default Footer;