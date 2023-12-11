import { ADDED, DECREMENTQUENTITY } from "./actionType";
import initialState from "./initialState";

const prodouctReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      if (state.length === 0) {
        return [
          ...state,
          {
            id: 1,
            ...action.payload,
          },
        ];
      } else {
        const lastElm = state.at(-1);
        return [
          ...state,
          {
            id: lastElm.id + 1,
            ...action.payload,
          },
        ];
      }
    case DECREMENTQUENTITY:
     return state.map(item =>{
      if(item.id === action.payload){
          return {
            ...item,
            prodouctQuantity: parseInt(item.prodouctQuantity) - 1
          }
      }
      return item
     })
    default:
      return state;
  }
};
export default prodouctReducer;
