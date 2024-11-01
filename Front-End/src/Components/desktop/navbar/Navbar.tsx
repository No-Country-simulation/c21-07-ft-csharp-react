import { useState } from "react";
import "./navbar.css";
import { UserOptions } from "../userOptions/UserOptions";
import { Sub_Menu } from "../../mobile/navbar-Mobile/Sub_Menu_Mobile/Sub_Menu";
import Icon from "../../icons";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [settings, setUserSettings] = useState(false);
  const navigate = useNavigate();
  const handleClickUserSettings = () => {
    setUserSettings(!settings);
  };
  return (
    <div className="Navbar_container">
      <div className="div_navbar_options">
        <div onClick={() => navigate("/home")}>
          <Icon name="bankLogo" />
        </div>
        <Sub_Menu />
      </div>
      <button className="button_user" onClick={handleClickUserSettings}>
        <Icon name="userIcon" size={40} />
      </button>
      <div
        className="settings"
        style={settings ? { display: "block" } : { display: "none" }}
      >
        <UserOptions view={handleClickUserSettings} />
      </div>
    </div>
  );
};
