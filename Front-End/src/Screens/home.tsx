import "./home.css";
import { Transacciones } from "../Components/desktop/historialTransacciones/Transacciones";
import { Navbar } from "../Components/desktop/navbar/Navbar";
import { Account } from "../Components/mobile/account/Account";
import { Fast_access_options } from "../Components/mobile/fast_access_options/Fast_access_options";
import { useEffect, useState } from "react";
import { Navbar_Mobile } from "../Components/mobile/navbar-Mobile/Navbar_Mobile";

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
      {windowWidth <= 770 ? <Navbar_Mobile /> : <Navbar />}
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
