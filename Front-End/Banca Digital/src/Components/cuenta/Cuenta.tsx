import "./Cuenta.css";

interface props {
  prefijo: string;
  identificador: number;
  saldo: number;
}

export const Cuenta = ({ prefijo, identificador, saldo }: props) => {
  return (
    <div className="cuenta_container">
      <h2 className="title">Cuenta</h2>
      <div className="data_account">
        <div>
          <h3>
            {prefijo}({identificador})
          </h3>
          <p>Caja de ahorros</p>
        </div>
        <h3>${saldo}</h3>
      </div>
    </div>
  );
};
