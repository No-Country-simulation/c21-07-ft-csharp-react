import "./Sub_Menu.css";

export const Sub_Menu = () => {
  return (
    <div className="Sub_Menu_Container">
      <ul className="List_options">
        <li className="Options_Sub_menu">
          <img className="Icon_Sub_menu" src="/home-icon.png" alt="" />
          Inicio
        </li>
        <li className="Options_Sub_menu">
          <img className="Icon_Sub_menu" src="/Consultar-icon.png" alt="" />
          Consultar
        </li>
        <li className="Options_Sub_menu">
          <img className="Icon_Sub_menu" src="/Money-icon.png" alt="" />
          Operar
        </li>
      </ul>
    </div>
  );
};
