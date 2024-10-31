import { useNavigate } from "react-router-dom";
import Icon from "../../../icons";
import "./Sub_Menu.css";
import BtnCloseSession from "../../../desktop/navbar/btnCloseSession";
import { UseWindoWidth } from "../../../../resize/UseWindoWidth";

export const Sub_Menu = () => {
  const navigate = useNavigate();
  const windowWidth = UseWindoWidth();

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
          <div onClick={() => navigate("/transferencia")}>
            <Icon name="transferirMenu" size={30} />
            <p>Transferir</p>
          </div>
        </li>
        <li className="Options_Sub_menu">
          <div onClick={() => navigate("/prestamo")}>
            <Icon name="prestamoMenu" size={30} />
            <p>Prestamo </p>
          </div>
        </li>
        {windowWidth <= 770 ? (
          <>
            <li className="Options_Sub_menu">
              <div onClick={() => navigate("/notificaciones")}>
                <Icon name="notification" size={30} />
                <p>Notificaciones</p>
              </div>
            </li>
            <li className="Options_Sub_menu closeSession">
              <BtnCloseSession></BtnCloseSession>
            </li>
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};
