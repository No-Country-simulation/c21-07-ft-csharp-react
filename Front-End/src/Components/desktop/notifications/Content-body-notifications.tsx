import { useState } from "react";

interface notificacion {
  title: string;
  fecha: string;
  contenido: string;
}

interface props {
  notificaciones: notificacion[];
}

export const Content_body_notifications = ({ notificaciones }: props) => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>
      {notificaciones.map((element, index) => (
        <div
          key={index + element.title}
          onClick={() => toggleOpen(index)}
          className="content-notification"
        >
          <div className="titles-notification">
            <p>{element.title}</p>
            <p>{element.fecha}</p>
          </div>
          {open === index && (
            <div className="content-body">
              <p>{element.contenido}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
