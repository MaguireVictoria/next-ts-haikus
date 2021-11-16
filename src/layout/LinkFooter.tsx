import "./LinkFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
	icono: IconDefinition;
	texto: string;
}

const LinkFooter = ({ icono, texto }: Props) => {
  return (
    <div className="ContenedorLinkFooter">
      <FontAwesomeIcon icon={icono} className="IconoLinkFooter" />
      <div className="TextoLinkFooter">{texto}</div>
    </div>
  );
};

export default LinkFooter;