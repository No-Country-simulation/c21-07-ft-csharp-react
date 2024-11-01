import styled from "styled-components";

interface props {
  cuentaDestino: string;
  concepto: string;
  cantidadTransferida: string;
  moneda: string;
  closeTicket: () => void;
}

export const Ticket = ({
  cuentaDestino,
  concepto,
  cantidadTransferida,
  moneda,
  closeTicket,
}: props) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card cart">
          <label className="title">TICKET</label>
          <div className="steps">
            <div className="step">
              <div>
                <span>TRANSFERENCIA</span>
                <p>Transferencia realizada a: {cuentaDestino}</p>
                <p>Concepto: {concepto}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card checkout">
          <div className="footer">
            <p className="price">
              {moneda}$ {cantidadTransferida}
            </p>
            <button className="checkout-btn" onClick={closeTicket}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Body */
  .container {
    width: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .card {
    width: 100%;
    max-width: 600px;
    background: rgb(255, 250, 235);
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
      0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
      0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  .title {
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 25px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 18px;
    color: #000000;
  }

  /* Cart */
  .cart {
    border-radius: 20px 20px 0px 0px;
  }

  .cart .steps {
    border-top: 1px solid rgba(16, 86, 82, 0.75);
    display: flex;
    flex-direction: column;
    padding: 25px;
  }

  .cart .steps .step {
    display: grid;
    gap: 15px;
  }

  .cart .steps .step span {
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 8px;
    display: block;
  }

  .cart .steps .step p {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    margin-top: 5px;
  }

  .checkout .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px 15px 25px;
    background-color: rgba(16, 86, 82, 0.5);
  }

  .price {
    position: relative;
    font-size: 26px;
    color: #2b2b2f;
    font-weight: 900;
    margin-right: 8px;
  }

  .checkout .checkout-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 45px;
    background: rgba(16, 86, 82, 0.55);
    box-shadow: 0px 0.5px 0.5px rgba(16, 86, 82, 0.75),
      0px 1px 0.5px rgba(16, 86, 82, 0.75);
    border-radius: 7px;
    border: 1px solid rgb(16, 86, 82);
    color: #000000;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .checkout-btn:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .card {
      max-width: 700px;
    }
    .title {
      font-size: 22px;
    }
    .cart .steps .step span,
    .cart .steps .step p {
      font-size: 18px;
    }
    .price {
      font-size: 28px;
    }
    .checkout .checkout-btn {
      width: 200px;
      height: 50px;
    }
  }

  @media (min-width: 1024px) {
    .card {
      max-width: 750px;
    }
    .title {
      font-size: 24px;
    }
    .cart .steps .step span,
    .cart .steps .step p {
      font-size: 20px;
    }
    .price {
      font-size: 30px;
    }
    .checkout .checkout-btn {
      width: 220px;
      height: 55px;
    }
  }
`;
