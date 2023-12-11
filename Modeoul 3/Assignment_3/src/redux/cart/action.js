import { ADDTOCART,DECREMENTQUENTITY,GETTOTAL,REMOVETOCART } from "./actionType";

export const addToCart = (prodouct,prodouctId) => {
  return {
    type: ADDTOCART,
    payload:{
      value : prodouct,
      id : prodouctId
    },
  };
};

export const removeFromCart = (prodouctId) => {
  return {
    type: REMOVETOCART,
    payload: prodouctId,
  };
};
export const decrement = (prodouctId) => {
  return {
    type: DECREMENTQUENTITY,
    payload: prodouctId,
  };
}
export const getTotal = ()=>{
    return {
      type:GETTOTAL,
    }
}