import React from "react";
import "./App.css";
import Header from "./components/Header";
import ListaCompras from "./components/ListaCompras";
import AddItem from "./components/AddItem";
import { GlobalProvider } from "./context/GlobalState";
import IncomesExpenses from "./components/IncomesExpenses";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <IncomesExpenses />
        <div className="row">
          <div className="col-sm p-3">
            <ListaCompras />
          </div>
          <div className="col-sm">
            <AddItem />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
