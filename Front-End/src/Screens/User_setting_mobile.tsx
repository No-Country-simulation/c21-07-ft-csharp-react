import "./User_settings_view.css";
import { NavbarWindowWidth } from "../Components/desktop/navbar/NavbarWindowWidth";

export const UserConfings = () => {
  /* const data = {
    name: "Hugo Desiderio",
    email: "hugojavierdesiderio@gmail.com",
    password: "1234",
  }; */

  return (
    <>
      <NavbarWindowWidth />

      <div className="userConfigsContainer">
        <div>
          <h2>My profile</h2>
          <form className="formUserSettings">
            <label htmlFor="name">Nombre</label>
            <input type="name" disabled />
            <label htmlFor="email">Email</label>
            <input type="email" disabled />
            <label htmlFor="contraseña">contraseña</label>
            <input type="password" disabled />
          </form>
        </div>
      </div>
    </>
  );
};
