/* eslint-disable no-case-declarations */
import { toast } from "react-toastify";
import {
  ADDTOCART,
  DECREMENTQUENTITY,
  GETTOTAL,
  REMOVETOCART,
} from "./actionType";
import initialState from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      const exjetingCart = state.carts.find(
        (cart) => cart.id === action.payload.id
      );
      if (exjetingCart) {
        toast.success("Prodouct quentity incresse successfull");
        return {
          ...state,
          carts: state.carts.map((cart) => {
            if(cart.id === action.payload.id) {
              return {
                ...cart,
                cartQuentity: cart.cartQuentity + 1,
              };
            }
            return cart
          }),
        };
      } else {
        toast.success("added to cart successfully");
        return {
          ...state,
          carts: [...state.carts, { ...action.payload.value, cartQuentity: 1 }],
        };
      }
    case REMOVETOCART:
      toast("Remove to cart successfully");
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload),
      };
    case DECREMENTQUENTITY:
      return {
        ...state,
        carts: state.carts.map((cart) => {
          if (cart.id === action.payload) {
            return {
              ...cart,
              cartQuentity: cart.cartQuentity - 1,
            };
          }
          return cart;
        }),
      };
    case GETTOTAL:
      const calculationCart = state?.carts?.reduce(
        (cartTotal, cartItem) => {
          const { prodouctPrice, cartQuentity } = cartItem;
          const itemTotal = prodouctPrice * cartQuentity;
          cartTotal.total = cartTotal.total + itemTotal;
          cartTotal.quentity += cartQuentity;
          return cartTotal;
        },
        {
          total: 0,
          quentity: 0,
        }
      );
      state.cartTotalAmount = calculationCart?.total;
      state.cartTotalQuantity = calculationCart?.quentity;
      return state;
    default:
      return state ;
  }
};
export default cartReducer;
