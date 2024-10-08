import { Cuenta } from "../Components/cuenta/Cuenta";
import { Fast_access_options } from "../Components/fast_access_options/Fast_access_options";
import { Navbar_Mobile } from "../Components/navbar-Mobile/Navbar_Mobile";

export const Home = () => {
  return (
    <div>
      <Navbar_Mobile />
      <Fast_access_options />
      <Cuenta prefijo="Hugo" identificador={1234567} saldo={1500} />
    </div>
  );
};
