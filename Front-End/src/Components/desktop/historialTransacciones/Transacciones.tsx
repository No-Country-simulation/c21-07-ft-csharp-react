import { Columns_transacciones } from "./columns/columns_transacciones";
import "./transacciones.css";

export const Transacciones = () => {
  const titles = [
    "Fecha",
    "Descripción",
    "Numero de transaccion",
    "Debito",
    "Credito",
  ];
  const datosTransferencias = [
    ["1/2/2014", "34345464", "sueldo", "18000", ""],
    ["12/4/2018", "45646564", "compra comercio", "", "1000"],
    ["6/8/2024", "45649864", "retiro abitab", "500", ""],
  ];
  return (
    <div className="transacciones_container">
      <div className="title_transacciones_div">
        <h2>Historial de Transacciones</h2>
      </div>
      <div className="list_transacciones">
        <Columns_transacciones titles={titles} data={datosTransferencias} />
      </div>
    </div>
  );
};
