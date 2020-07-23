import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CalculoCompra from "./CalculoCompra";
import { numberWithCommas } from "../utils/format";

const IncomesExpenses = () => {
  const { compras } = useContext(GlobalContext);

  const costos = compras.map((compra) => compra.costo);
  console.log(costos);
  const total = costos.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const gastos = costos
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // const saldoDisponible = Compra -total

  return (
    <>
      <div className="row m-2 p-2" style={{ backgroundColor: "#198999" }}>
        <div className="container col-md-6">
          <div className="card m-2">
            <div className="card-body text-center">
              <h4 className="card-title">Total de Compras</h4>
              <h3 className="card-subtitle text-primary ">
                ${numberWithCommas(total)}
              </h3>
            </div>
          </div>
        </div>
        <CalculoCompra gastos={gastos} />
      </div>
    </>
  );
};

export default IncomesExpenses;
