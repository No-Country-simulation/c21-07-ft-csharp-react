import "./Sub_Menu.css";

export const Sub_Menu = () => {
  return (
    <div className="Sub_Menu_Container">
      <ul className="List_options">
        <li className="Options_Sub_menu">
          <div>
            <img className="Icon_Sub_menu" src="/home-icon.png" alt="" />
            <p>Inicio</p>
          </div>
          <img className="arrow_subMenu" src="/flecha_menu.png" alt="" />
        </li>
        <li className="Options_Sub_menu">
          <div>
            <img className="Icon_Sub_menu" src="/verificar_menu.png" alt="" />
            <p>Consultar</p>
          </div>
          <img className="arrow_subMenu" src="/flecha_menu.png" alt="" />
        </li>
        <li className="Options_Sub_menu">
          <div>
            <img className="Icon_Sub_menu" src="/Money-icon.png" alt="" />
            <p>Operar</p>
          </div>
          <img className="arrow_subMenu" src="/flecha_menu.png" alt="" />
        </li>
      </ul>
    </div>
  );
};
