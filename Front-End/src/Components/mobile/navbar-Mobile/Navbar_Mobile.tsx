import { useState } from "react";
import "./Nabvar_Mobile.css";
import { Sub_Menu } from "./Sub_Menu_Mobile/Sub_Menu";
import Icon from "../../icons";
import { useNavigate } from "react-router-dom";

export const Navbar_Mobile = () => {
  const [ViewSubMenu, setViewSubMenu] = useState(false);
  const navigate = useNavigate();
  const HandleClick = () => {
    setViewSubMenu(!ViewSubMenu);
  };
  return (
    <>
      <div className="Navbar_Mobile_container">
        <button className="Button-Menu" onClick={HandleClick}>
          {ViewSubMenu ? (
            <Icon name="cruzMenu" />
          ) : (
            <Icon name="hamburgerMenu" />
          )}
        </button>
        <Icon name="bankLogo" />
        <button
          className="button_user_menu"
          onClick={() => navigate("/settings")}
        >
          <Icon name="userIcon" />
        </button>
      </div>
      {ViewSubMenu && <Sub_Menu />}
    </>
  );
};
