import "./cotizaciones.css";

export const Cotizaciones = () => {
  return (
    <div className="cotizaciones_container">
      <section>
        <h2 className="title">Cotizaciones</h2>
        <div className="coin">
          <h3>Dolar</h3>
          <div className="price_money_div">
            <div className="price_money">
              <p>compra</p>
              <p>40,55</p>
            </div>
            <div className="price_money">
              <p>venta</p>
              <p>41,95</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
