export default (state, action) => {
  switch (action.type) {
    case 'GET_COMPRAS':
      return{
        ...state,
        loading: false,
        compras: action.payload
      }
    case "DELETE_COMPRA":
      return {
        ...state,
        compras: state.compras.filter((compra) => compra._id !== action.payload),
      };
    case 'ADD_COMPRA':
        return{
            ...state,
            compras: [...state.compras, action.payload]
        };
    case "ERROR_COMPRA" :
      return{
        ...state,
        error:action.payload
      }

    default:
      return state;
  }
};
