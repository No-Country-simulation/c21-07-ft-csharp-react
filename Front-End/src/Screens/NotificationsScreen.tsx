import "./notifications.css";
import { NavbarWindowWidth } from "../Components/desktop/navbar/NavbarWindowWidth";
import { Notifications } from "../Components/desktop/notifications/notifications";

export const NotificationsScreen = () => {
  return (
    <>
      <NavbarWindowWidth />
      <div className="notifications_container">
        <Notifications />
      </div>
    </>
  );
};
