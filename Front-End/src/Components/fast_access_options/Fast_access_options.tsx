import "./Fast_access_options.css";

export const Fast_access_options = () => {
  return (
    <section className="Fast_access_options_Container">
      <ul className="menu_fastAccess">
        <li className="option_fastAccess">
          <img src="/CreditCard-Icon.png" alt="" />
          <p>pagar tarjeta</p>
        </li>
        <li className="option_fastAccess">
          <img src="/Transfer-Icon.png" alt="" />
          <p>Transferir</p>
        </li>
        <li className="option_fastAccess">
          <img src="/Prestamo-Icon.png" alt="" />
          <p>Solicitar Prestamo </p>
        </li>
        <li className="option_fastAccess">
          <img src="/RecargaCelularIcon.png" alt="" />
          <p>Recargar Celular</p>
        </li>
      </ul>
    </section>
  );
};
