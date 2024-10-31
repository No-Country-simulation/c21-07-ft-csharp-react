import { useState } from "react";
import { Buttons } from "../btn/buttons";
import { Ticket } from "../recibo/Ticket";
import "./formTransfer.css";
import Icon from "../../icons";

export const FormTransfer = () => {
  const [showTicket, setShowTicket] = useState(false);
  const [checkoDestinatario, setCheckoDestinatario] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingImporte, setIsLoadingImporte] = useState(false);
  const [checkoImporte, setCheckoImporte] = useState(false);
  const [errorCuentaDestino, setErrorCuentaDestino] = useState("");
  const [errorCantidadTransferida, setErrorCantidadTransferida] = useState("");

  const CantidadDinero = 1500;
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
    setCheckoDestinatario(false);
    setCheckoImporte(false);
    setErrorCuentaDestino("");
    setErrorCantidadTransferida("");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowTicket(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "cuentaDestino") {
      if (value.length === 10) {
        setIsLoading(true);
        setTimeout(() => {
          if (value === "1111111111") {
            setCheckoDestinatario(true);
            setErrorCuentaDestino("");
          } else {
            setCheckoDestinatario(false);
            setErrorCuentaDestino("No se encuentra el usuario.");
          }
          setIsLoading(false);
        }, 3000);
      } else {
        setCheckoDestinatario(false);
        setErrorCuentaDestino("");
      }
    }

    if (name === "cantidadTransferida" && value !== "") {
      setIsLoadingImporte(true);

      setTimeout(() => {
        if (Number(value) > CantidadDinero) {
          setCheckoImporte(false);
          setErrorCantidadTransferida(
            "El importe ingresado excede la cantidad que posee."
          );
        } else {
          setCheckoImporte(true);
          setErrorCantidadTransferida("");
        }
        setIsLoadingImporte(false);
      }, 3000);
    }

    if (!(name === "cuentaDestino" || name === "cantidadTransferida")) {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
      console.log(formData);
    } else if (/^\d*$/.test(value)) {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="transfer-form">
        <label htmlFor="cuenta_origen">Cuenta de origen</label>
        <input
          className="transfer-input"
          type="text"
          id="cuenta_origen"
          value="1111111111"
          disabled
        />

        <label htmlFor="cuenta_destino">Cuenta de destino</label>
        {errorCuentaDestino && (
          <span className="error-message">{errorCuentaDestino}</span>
        )}
        <div className="transfer-input-group">
          <input
            className="transfer-input"
            name="cuentaDestino"
            type="text"
            id="cuenta_destino"
            value={formData.cuentaDestino}
            required
            onChange={handleChange}
            maxLength={10}
          />
          {isLoading ? (
            <span className="transfer-loader"></span>
          ) : checkoDestinatario ? (
            <Icon name="check" color="green" />
          ) : null}
        </div>

        {checkoDestinatario && (
          <>
            <label htmlFor="Nombre_destinatario">Nombre del destinatario</label>
            <input
              type="text"
              className="transfer-input"
              value="hugo desiderio"
              disabled
            />
          </>
        )}

        <label htmlFor="Importe">Importe</label>
        {errorCantidadTransferida && (
          <span className="error-message">{errorCantidadTransferida}</span>
        )}
        <div className="transfer-input-group">
          <select
            className="transfer-input"
            name="moneda"
            value={formData.moneda}
            onChange={handleChange}
          >
            <option value="UY">$UY</option>
            <option value="ARG">$ARG</option>
          </select>
          <input
            id="Importe"
            name="cantidadTransferida"
            className="transfer-input"
            type="text"
            value={formData.cantidadTransferida}
            required
            onChange={handleChange}
          />
          {isLoadingImporte ? (
            <span className="transfer-loader"></span>
          ) : checkoImporte ? (
            <Icon name="check" color="green" />
          ) : null}
        </div>
        <label htmlFor="Concepto">Concepto</label>
        <input
          className="transfer-input"
          name="concepto"
          type="text"
          id="Concepto"
          value={formData.concepto}
          required
          onChange={handleChange}
        />
        <div className="transfer-buttons">
          <Buttons text="Transferir" sub={true} back={true} />
          <Buttons text="Cancelar" />
        </div>
      </form>
      {showTicket && (
        <div className="transfer-ticket-overlay">
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
