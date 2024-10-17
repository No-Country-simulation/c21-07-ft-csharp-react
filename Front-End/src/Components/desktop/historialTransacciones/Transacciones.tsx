import "./transacciones.css";

export const Transacciones = () => {
  return (
    <div className="transacciones_container">
      <div className="title_transacciones_div">
        <h2>Historial de Transacciones</h2>
      </div>
      <div className="list_transacciones">
        <ul className="colums_transacciones first_colum">
          <li>
            <h3 className="title_colums">Fecha</h3>
          </li>
          <li>
            <p className="text_colums">1/2/2014</p>
          </li>
          <li>
            <p className="text_colums">12/4/2018</p>
          </li>
          <li>
            <p className="text_colums">6/8/2024</p>
          </li>
        </ul>
        <ul className="colums_transacciones">
          <li>
            <h3 className="title_colums">Descripción</h3>
          </li>
          <li>
            <p className="text_colums">sueldo</p>
          </li>
          <li>
            <p className="text_colums">compra comercio</p>
          </li>
          <li>
            <p className="text_colums">retiro abitab</p>
          </li>
        </ul>
        <ul className="colums_transacciones">
          <li>
            <h3 className="title_colums">Numero de transaccion</h3>
          </li>
          <li>
            <p className="text_colums">34345464</p>
          </li>
          <li>
            <p className="text_colums">45646564</p>
          </li>
          <li>
            <p className="text_colums">45649864</p>
          </li>
        </ul>
        <ul className="colums_transacciones">
          <li>
            <h3 className="title_colums">debito</h3>
          </li>
          <li>
            <p className="text_colums">18000</p>
          </li>
          <li>""</li>
          <li>
            <p className="text_colums">500</p>
          </li>
        </ul>
        <ul className="colums_transacciones">
          <li>
            <h3 className="title_colums">credito</h3>
          </li>
          <li>""</li>
          <li>
            <p className="text_colums">1000</p>
          </li>
          <li>""</li>
        </ul>
      </div>
    </div>
  );
};
