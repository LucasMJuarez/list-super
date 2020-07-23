import React, { useContext, useEffect } from "react";
import Compra from "./Compra";

import { GlobalContext } from "../context/GlobalState";

const ListaCompras = () => {
  const { compras, getCompras } = useContext(GlobalContext);

  useEffect(() => {
    getCompras();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="container p-2 mt-2 text-center"
      style={{
        backgroundColor: "lightsteelblue",
        justifyContent: "center",
      }}
    >
      <h4 className="m-2">Lista de Compras</h4>
      <ul className="list">
        {compras.map((compra) => (
          <Compra key={compra._id} compra={compra} />
        ))}
      </ul>
    </div>
  );
};

export default ListaCompras;
