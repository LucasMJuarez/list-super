import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddItem = () => {
  const { addCompra } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [costo, setCosto] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newCompra = {
      id: Math.floor(Math.random() * 10000000),
      text,
      costo: +costo,
    };
    addCompra(newCompra);
  };

  return (
    <>
      <div
        className="container mt-4 p-2" 
        style={{ backgroundColor: "#aeeaaa" }}
      >
        <form onSubmit={handleOnSubmit} className="col-md-12">
          <div className="form-group">
            <label htmlFor="text" className="text-center">
              Producto
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del Producto"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <small className="form-text text-muted">Ingrese un producto</small>
          </div>
          <div className="form-group">
            <label htmlFor="costo">Valor</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ingrese el precio"
              value={costo}
              onChange={(e) => setCosto(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar Producto
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
