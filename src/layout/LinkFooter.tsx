import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "./LinkFooter.module.css"

interface Props {
	icono: IconDefinition;
	texto: string;
}

const LinkFooter = ({ icono, texto }: Props) => {
  return (
    <div className={styles.Contenedor}>
      <FontAwesomeIcon className={styles.Icono} icon={icono} />
      <div className={styles.Texto}> {texto}</div>
    </div>
  );
};

export default LinkFooter;