import { ADDED, DECREMENTQUENTITY } from "./actionType";
export const added = (prodouctDeails) => {
  return {
    type: ADDED,
    payload: prodouctDeails,
  };
};
export const decrementQuentity = (prodouctId)=>{
    return {
        type: DECREMENTQUENTITY,
        payload: prodouctId
    }
}