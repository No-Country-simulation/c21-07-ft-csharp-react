import { useNavigate } from "react-router-dom";
import "./Fast_access_options.css";
import Icon from "../../icons";

export const Fast_access_options = () => {
  const navigate = useNavigate();
  return (
    <section className="Fast_access_options_Container">
      <ul className="menu_fastAccess">
        <li className="option_fastAccess">
          <Icon name="pagar" />
          <p>Pagar</p>
        </li>
        <li
          className="option_fastAccess"
          onClick={() => navigate("/transferencia")}
        >
          <Icon name="transferir" />
          <p>Transferir</p>
        </li>
        <li className="option_fastAccess">
          <Icon name="prestamo" />
          <p>Prestamo </p>
        </li>
        <li className="option_fastAccess">
          <Icon name="recargar" />
          <p>Recargas</p>
        </li>
      </ul>
    </section>
  );
};
