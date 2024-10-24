import { useEffect, useState } from "react";
import { Navbar_Mobile } from "../../mobile/navbar-Mobile/Navbar_Mobile";
import { Navbar } from "./Navbar";

export const NavbarWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <>{windowWidth <= 770 ? <Navbar_Mobile /> : <Navbar />}</>;
};
