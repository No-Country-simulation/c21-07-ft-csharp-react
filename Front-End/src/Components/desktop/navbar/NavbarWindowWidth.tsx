import { Navbar_Mobile } from "../../mobile/navbar-Mobile/Navbar_Mobile";
import { Navbar } from "./Navbar";
import { UseWindoWidth } from "../../../resize/UseWindoWidth";

export const NavbarWindowWidth = () => {
  const windowWidth = UseWindoWidth();

  return <>{windowWidth <= 770 ? <Navbar_Mobile /> : <Navbar />}</>;
};
