import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";


const Compra = ({ compra }) => {
  const { deleteCompra } = useContext(GlobalContext);

  const sign = compra.costo < 0 ? "-" : "+";

  return (
    <div className="container">
      <li className="list" key={compra.id}>
        {compra.text}
        <span className="ml-2 text-center">
          {sign}${numberWithCommas(Math.abs(compra.costo))}
          <button
            type="button"
            className="ml-3 danger-btn btn-outline-danger"
            onClick={() => deleteCompra(compra._id)}
          >
            X
          </button>
        </span>
      </li>
    </div>
  );
};

export default Compra;
