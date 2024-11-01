import { useNavigate } from "react-router-dom";
import Icon from "../../../icons";
import "./Sub_Menu.css";

export const Sub_Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="Sub_Menu_Container">
      <ul className="List_options">
        <li className="Options_Sub_menu">
          <div className="home_submenu" onClick={() => navigate("/home")}>
            <Icon name="home" size={30} />
            <p>Inicio</p>
          </div>
        </li>
        <li className="Options_Sub_menu">
          <div>
            <Icon name="consultar" size={30} />
            <p>Consultar</p>
          </div>
          <Icon name="arrow" />
        </li>
        <li className="Options_Sub_menu">
          <div>
            <Icon name="operar" size={30} />
            <p>Operar</p>
          </div>
          <Icon name="arrow" />
        </li>
      </ul>
    </div>
  );
};
