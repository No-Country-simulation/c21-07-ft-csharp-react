import "./navbar.css";
import { Sub_Menu } from "../../mobile/navbar-Mobile/Sub_Menu_Mobile/Sub_Menu";
import Icon from "../../icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserMenu } from "../UserMenu/userMenu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="Navbar_container">
      <div className="div_navbar_options">
        <div onClick={() => navigate("/home")}>
          <Icon name="bankLogo" />
        </div>
        <Sub_Menu />
      </div>
      <div className="close-session">
        <button className="button_user" onClick={() => setOpen(!open)}>
          <Icon name="userIcon" size={40} />
        </button>
        <div
          className="settings"
          onMouseLeave={() => setOpen(!open)}
          style={open ? { display: "block" } : { display: "none" }}
        >
          <UserMenu />
        </div>
      </div>
    </div>
  );
};
