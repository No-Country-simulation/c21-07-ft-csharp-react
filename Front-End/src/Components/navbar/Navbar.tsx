import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar_container">
      <div className="div_navbar_options">
        <img className="logo_home" src="/Logo-Icon.png" alt="" />
        <ul className="list_home">
          <li className="opcions_menu">
            <img className="icon_menu" src="/home-icon.png" alt="" />
            Inicio
            <img className="arrow_menu" src="/flecha_menu.png" alt="" />
          </li>
          <li className="opcions_menu">
            <img className="icon_menu" src="/verificar_menu.png" alt="" />
            Consultar
            <img className="arrow_menu" src="/flecha_menu.png" alt="" />
          </li>
          <li className="opcions_menu">
            <img className="icon_menu" src="/Money-icon.png" alt="" />
            Operar
            <img className="arrow_menu" src="/flecha_menu.png" alt="" />
          </li>
        </ul>
      </div>
      <img className="userIcon_home" src="/User-Icon.png" alt="" />
    </div>
  );
};
