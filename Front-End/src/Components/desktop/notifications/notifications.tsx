import { Content_body_notifications } from "./Content-body-notifications";
import "./notifications.css";
interface notificacion {
  title: string;
  fecha: string;
  contenido: string;
}

export const Notifications = () => {
  const notificacionesDeEjemplo: notificacion[] = [
    {
      title: "Nueva actualización disponible",
      fecha: "2024-10-29",
      contenido:
        "La versión 1.2.3 está lista para instalar. Incluye mejoras de rendimiento y corrección de errores.",
    },
    {
      title: "Mantenimiento programado",
      fecha: "2024-11-01",
      contenido:
        "Habrá una ventana de mantenimiento el 1 de noviembre de 2024 desde las 00:00 hasta las 04:00 horas. Durante este tiempo, el servicio no estará disponible.",
    },
    {
      title: "Bienvenido a la plataforma",
      fecha: "2024-10-15",
      contenido:
        "Gracias por registrarte en nuestra plataforma. Disfruta de todas las funcionalidades disponibles.",
    },
    {
      title: "Bienvenido a la plataforma",
      fecha: "2024-10-15",
      contenido:
        "Gracias por registrarte en nuestra plataforma. Disfruta de todas las funcionalidades disponibles.",
    },
    {
      title: "Bienvenido a la plataforma",
      fecha: "2024-10-15",
      contenido:
        "Gracias por registrarte en nuestra plataforma. Disfruta de todas las funcionalidades disponibles.",
    },
  ];

  return (
    <div className="notification-container">
      <h2 className="title-notification">Notificaciones</h2>
      <Content_body_notifications notificaciones={notificacionesDeEjemplo} />
    </div>
  );
};
