import { useState } from "react";
import "./Nabvar_Mobile.css";
import { Sub_Menu } from "./Sub_Menu_Mobile/Sub_Menu";
import Icon from "../../icons";

export const Navbar_Mobile = () => {
  const [ViewSubMenu, setViewSubMenu] = useState(false);
  const [ViewUserSetting, setViewUserSetting] = useState(false);

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
        <a href="" onClick={() => setViewUserSetting(!ViewUserSetting)}>
          <Icon name="userIcon" />
        </a>
      </div>
      {ViewSubMenu && <Sub_Menu />}
    </>
  );
};
