import "./Account.css";

interface props {
  prefijo: string;
  identificador: number;
  saldo: number;
}

export const Account = ({ prefijo, identificador, saldo }: props) => {
  return (
    <div className="cuenta_container">
      <div className="title_accout">
        <h2>Cuenta</h2>
      </div>
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
