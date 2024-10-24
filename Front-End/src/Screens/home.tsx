import "./home.css";
import { Transacciones } from "../Components/desktop/historialTransacciones/Transacciones";

import { Account } from "../Components/mobile/account/Account";
import { Fast_access_options } from "../Components/mobile/fast_access_options/Fast_access_options";
import { useEffect, useState } from "react";

import { NavbarWindowWidth } from "../Components/desktop/navbar/NavbarWindowWidth";

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="home_container">
      <NavbarWindowWidth />
      <div className="home_div">
        {windowWidth <= 770 ? (
          <>
            <Fast_access_options />
            <Transacciones />
          </>
        ) : (
          <>
            <Transacciones />
            <Fast_access_options />
          </>
        )}
      </div>
      <Account prefijo="Hugo" identificador={1234567} saldo={1500} />
    </div>
  );
};
