import { Account } from "../Components/account/Account";
import { Cotizaciones } from "../Components/cotizaciones/Cotizaciones";
import { Fast_access_options } from "../Components/fast_access_options/Fast_access_options";
import { Navbar_Mobile } from "../Components/navbar-Mobile/Navbar_Mobile";

export const Home_mobile = () => {
  return (
    <div>
      <Navbar_Mobile />
      <Fast_access_options />
      <Account prefijo="Hugo" identificador={1234567} saldo={1500} />
      <Cotizaciones />
    </div>
  );
};
