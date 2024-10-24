import { FormTransfer } from "../Components/desktop/formTransfer/formTransfer";
import { NavbarWindowWidth } from "../Components/desktop/navbar/NavbarWindowWidth";

import "./transferir.css";

export const Transferir = () => {
  return (
    <div className="transfer_container">
      <NavbarWindowWidth />
      <div className="form_div">
        <h2>Transferencia</h2>
        <FormTransfer />
      </div>
    </div>
  );
};
