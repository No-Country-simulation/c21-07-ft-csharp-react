import { Navbar_Mobile } from "../Components/mobile/navbar-Mobile/Navbar_Mobile";

export const User_setting_mobile = () => {
  return (
    <>
      <Navbar_Mobile />
      <div>
        <ul>
          <li>Datos Personales</li>
          <li>Notificaciones</li>
          <li>Contacto soporte</li>
          <li>Preguntas Frecuentes</li>
        </ul>
        <button>Cerrar sesion</button>
      </div>
    </>
  );
};
