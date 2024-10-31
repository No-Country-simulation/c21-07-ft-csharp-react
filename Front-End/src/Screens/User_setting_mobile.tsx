import { NavbarWindowWidth } from "../Components/desktop/navbar/NavbarWindowWidth";
import { UserOptions } from "../Components/desktop/userOptions/UserOptions";
import "./user_setting.css";

export const UserConfings = () => {
  return (
    <>
      <NavbarWindowWidth />
      <div className="user_setting_container">
        <UserOptions />
      </div>
    </>
  );
};
