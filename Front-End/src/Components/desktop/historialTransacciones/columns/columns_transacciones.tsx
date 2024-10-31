interface props {
  titles: string[];
  data?: string[][];
}

export const Columns_transacciones = ({ titles, data }: props) => {
  return (
    <>
      {!data || data.length === 0 ? (
        <h2 className="noTransaction">
          Aún no ha realizado ninguna transacción
        </h2>
      ) : (
        <table className="colums_transacciones">
          <thead>
            <tr>
              {titles.map((item, index) => (
                <th key={index + item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {item.map((celda, index) => (
                  <td key={index + celda}>{celda}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
