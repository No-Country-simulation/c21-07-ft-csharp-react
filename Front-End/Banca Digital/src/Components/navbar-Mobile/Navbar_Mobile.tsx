import { useState } from "react";
import "./Nabvar_Mobile.css";
import { Sub_Menu } from "./Sub_Menu_Mobile/Sub_Menu";

export const Navbar_Mobile = () => {
  const [Menu, setMenu] = useState("/HamburgerMenu-Icon.png");
  const [ViewSubMenu, setViewSubMenu] = useState(false);

  const HandleClick = () => {
    if (Menu === "/HamburgerMenu-Icon.png") {
      setMenu("/CruzIcon.png");
      setViewSubMenu(!ViewSubMenu);
    } else {
      setMenu("/HamburgerMenu-Icon.png");
      setViewSubMenu(!ViewSubMenu);
    }
  };
  return (
    <>
      <div className="Navbar_Mobile_container">
        <button className="Button-Menu" onClick={HandleClick}>
          <img className="Icons-Navbar" src={Menu} alt="" />
        </button>
        <img className="Icons-Navbar logo" src="/Logo-Icon.png" alt="" />
        <img className="Icons-Navbar" src="/User-Icon.png" alt="" />
      </div>
      {ViewSubMenu && <Sub_Menu />}
    </>
  );
};
