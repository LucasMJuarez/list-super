import React, { useState } from "react";
import { numberWithCommas } from "../utils/format";

const CalculoCompra = ({ gastos }) => {
  const [Compra, setCompra] = useState('');
  const [resto, setResto] = useState(0);


  const handleCalculo = () => {
    //e.preventDefault();
    console.log(Compra)
    const saldo = gastos - Compra;
    setResto(saldo)
  };

  return (
    <div className="container justify-content-center">
      <div className="row" >
      <div className="container col-md-6">
          <div className="card m-2" style={{}}>
            <div className="card-body justify-content-center text-center">
              <h4 className="card-title">MOnto a gastar</h4>
              <h3 className="card-subtitle text-info">${numberWithCommas(Compra)}</h3>
            </div>
          </div>
        </div>
      <div className="container col-md-6">
          <div className="card m-2" style={{}}>
            <div className="card-body justify-content-center text-center">
              <h4 className="card-title">Saldo Disponible</h4>           
              <h3 className={ Compra > gastos ? ('text-success card-subtitle' ) : ('text-danger card-subtitle' )}>${numberWithCommas(resto*-1)}</h3>
            </div>
          </div>
      </div>
      </div>
      <h4 className="m-2 text-center">Monto maximo a gastar</h4>
      <input
        type="number"
        className="form-control"
        placeholder="Ingrese el monto"
        value={Compra}
        onChange={(e) => setCompra(e.target.value)}
      />
      <button
        className="btn btn-dark "
        onClick={() => handleCalculo()}
      >
        SALDO RESTANTE
      </button>
    </div>
  );
};

export default CalculoCompra;
