import { useState } from "react";
import { Buttons } from "../btn/buttons";
import { Ticket } from "../recibo/Ticket";

export const FormTransfer = () => {
  const [showTicket, setShowTicket] = useState(false);
  const [formData, setFormData] = useState({
    cuentaDestino: "",
    concepto: "",
    cantidadTransferida: "",
    moneda: "UY",
  });

  const handleShowticket = () => {
    setShowTicket(!showTicket);
    setFormData({
      cuentaDestino: "",
      concepto: "",
      cantidadTransferida: "",
      moneda: "UY",
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowTicket(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (!(name === "cuentaDestino" || name === "cantidadTransferida")) {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
      console.log(formData);
    } else if (/^\d*$/.test(value)) {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form_transferir">
        <label htmlFor="cuenta_origen">Cuenta de origen</label>
        <input
          className="inputTransfer"
          type="text"
          id="cuenta_origen"
          disabled
        />
        <label htmlFor="cuenta_destino">Cuenta de destino</label>
        <input
          className="inputTransfer"
          name="cuentaDestino"
          type="text"
          id="cuenta_destino"
          value={formData.cuentaDestino}
          required
          onChange={handleChange}
          maxLength={10}
        />
        <label htmlFor="Importe">Importe</label>
        <div className="import_transfer">
          <select
            className="inputTransfer"
            name="moneda"
            value={formData.moneda}
            onChange={handleChange}
          >
            <option value="UY">$UY</option>
            <option value="ARG">$ARG</option>
          </select>{" "}
          <input
            id="Importe"
            name="cantidadTransferida"
            className="inputTransfer"
            type="text"
            value={formData.cantidadTransferida}
            required
            onChange={handleChange}
          />
        </div>
        <label htmlFor="Concepto">Concepto</label>
        <input
          className="inputTransfer"
          name="concepto"
          type="text"
          id="Concepto"
          value={formData.concepto}
          required
          onChange={handleChange}
        />
        <div className="buttons_form">
          <Buttons text="Transferir" sub={true} back={true} />
          <Buttons text="Cancelar" />
        </div>
      </form>
      {showTicket && (
        <div className="ticket">
          <Ticket
            closeTicket={handleShowticket}
            cuentaDestino={formData.cuentaDestino}
            concepto={formData.concepto}
            cantidadTransferida={formData.cantidadTransferida}
            moneda={formData.moneda}
          />
        </div>
      )}
    </>
  );
};
