import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from 'axios'

const initialState = {
  compras: [],
  error:null,
  loading: true
};

//Create Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  const getCompras = async () => {
    try {
      const res = await axios.get('/api/v1/compras');

      dispatch({
        type: 'GET_COMPRAS',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'ERROR_COMPRA',
        payload: error.response.data.error
      })
    }
  }

  const deleteCompra = async (id) => {

    try {
      await axios.delete(`/api/v1/compras/${id}`);
      dispatch({
        type: "DELETE_COMPRA",
        payload: id,
      });
      
    } catch (error) {
      dispatch({
        type: 'ERROR_COMPRA',
        payload: error.response.data.error
      })
    }

  };

   const addCompra = async (compra) => {

    const config = {
      headers: {
        'Context-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/compras', compra, config);
      dispatch({
        type: "ADD_COMPRA",
        payload: res.data.data,
      })

    } catch (error) {
      dispatch({
        type: 'ERROR_COMPRA',
        payload: error.response.data.error
      })
    }


  };

  return (
    <GlobalContext.Provider
      value={{
        compras: state.compras,
        loading: state.loading,
        error: state.error,
        deleteCompra,
        addCompra,
        getCompras
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
