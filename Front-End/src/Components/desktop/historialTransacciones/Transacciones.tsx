import { Columns_transacciones } from "./columns/columns_transacciones";
import "./transacciones.css";

export const Transacciones = () => {
  const titles = [
    "Fecha",
    "Descripción",
    "Numero de transaccion",
    "Destinatario",
    "Monto",
  ];
  const datosTransferencias = [
    ["1/2/2014", "sueldo", "34345464", "12341654", "18000"],
    ["12/4/2018", "compra comercio", "45646564", "123146546", "1000"],
    ["6/8/2024", "retiro abitab", "45649864", "132456465", "500"],
    ["6/8/2024", "retiro abitab", "45649864", "132456465", "500"],
    ["6/8/2024", "retiro abitab", "45649864", "132456465", "500"],
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
