import React from "react";
import styles from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.ContenedorBuscadorHeader}>
        <input type="text" name="buscador" className={styles.Buscador} placeholder="Buscar" />
        <FontAwesomeIcon className={styles.IconoBuscador} icon={faSearch} />
      </div>
    </header>
  );
};


export default Header;