import "./home.css";
import { Transacciones } from "../Components/desktop/historialTransacciones/Transacciones";

import { Account } from "../Components/mobile/account/Account";
import { Fast_access_options } from "../Components/mobile/fast_access_options/Fast_access_options";
import { NavbarWindowWidth } from "../Components/desktop/navbar/NavbarWindowWidth";
import { UseWindoWidth } from "../resize/UseWindoWidth";

export const Home = () => {
  const windowWidth = UseWindoWidth();

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
