import { useState } from "react";
import "./UserOptions.css";

export const UserOptions = () => {
  const [edit, setEdit] = useState(true);
  const [dataUser, setdataUser] = useState({
    Nombre: "Hugo",
    Apellido: "Desiderio",
    Phone: "12345678",
    pais: "Uruguay",
    email: "hugo@gmail.com",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setdataUser((prevData) => ({
      ...prevData,
      [id]: value, // Actualiza la propiedad correspondiente
    }));
  };

  return (
    <div className="userConfigsContainer">
      <div>
        <h2 className="title-settings">Datos de usuario</h2>
        <div className="data-container">
          <div className="div-title-data">
            <p className="title-user-data">Datos Personales</p>
            <button className="btn-edit" onClick={() => setEdit(!edit)}>
              {edit ? "Editar" : "Guardar"}
            </button>
          </div>
          <form className="formUserSettings">
            <div>
              <label
                htmlFor="Nombre"
                className={`title-user-data ${edit ? "" : "titleEditable"}`}
              >
                Nombre
              </label>
              <input
                type="text"
                id="Nombre"
                className={`data-input ${edit ? "" : "bordes"}`}
                onChange={handleChange}
                value={dataUser.Nombre}
                disabled={edit}
              />
              <label
                htmlFor="Apellido"
                className={`title-user-data ${edit ? "" : "titleEditable"}`}
              >
                Apellido
              </label>
              <input
                type="text"
                id="Apellido"
                className={`data-input ${edit ? "" : "bordes"}`}
                onChange={handleChange}
                value={dataUser.Apellido}
                disabled={edit}
              />
              <label
                htmlFor="email"
                className={`title-user-data ${edit ? "" : "titleEditable"}`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`data-input ${edit ? "" : "bordes"}`}
                onChange={handleChange}
                value={dataUser.email}
                disabled={edit}
              />
            </div>
            <div>
              <label
                htmlFor="Phone"
                className={`title-user-data ${edit ? "" : "titleEditable"}`}
              >
                Contacto
              </label>
              <input
                type="text"
                id="Phone"
                className={`data-input ${edit ? "" : "bordes"}`}
                onChange={handleChange}
                value={dataUser.Phone}
                disabled={edit}
              />
              <label
                htmlFor="pais"
                className={`title-user-data ${edit ? "" : "titleEditable"}`}
              >
                Pais
              </label>
              <input
                type="text"
                id="pais"
                className={`data-input ${edit ? "" : "bordes"}`}
                onChange={handleChange}
                value={dataUser.pais}
                disabled={edit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
