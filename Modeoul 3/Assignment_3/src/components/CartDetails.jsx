/* eslint-disable react/prop-types */
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { addToCart, decrement,  getTotal,  removeFromCart } from "../redux/cart/action";
import { decrementQuentity } from "../redux/prodoucts/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const CartDetails = () => {
  const initialState = useSelector((state)=>state.cart)
  const carts = useSelector((state) => state.cart.carts)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTotal())
  },[initialState,dispatch,])
  const Add_To_Cart = (prodouctDetails, prodouctId) => {
    console.log(prodouctId)
    dispatch(addToCart(prodouctDetails, prodouctId));
    dispatch(decrementQuentity(prodouctId));
  };
  return (
    <div className="w-full flex flex-col gap-5">
      {carts?.map((carts) => (
        <div
          key={carts?.id}
          className="w-full grid grid-cols-12 gap-5 border p-2 rounded px-3 "
        >
          <div className="w-full col-span-6 flex items-center gap-5">
            <img className="w-16 h-16" src={carts.prodouctImageUrl} alt="" />
            <div>
              <h1 className="text-xl font-semibold">{carts.prodouctName}</h1>
              <h1 className="font-semibold">{carts.prodouctCategory}</h1>
              <h1 className="font-semibold">BDT {carts.prodouctPrice}</h1>
            </div>
          </div>
          <div className="w-full col-span-3 flex justify-center items-center gap-3">
            <button onClick={() => Add_To_Cart(carts, carts.id)}>
              <FaPlus className="w-4 h-4" />
            </button>
            <h1>{carts?.cartQuentity}</h1>
            <button
              disabled={carts.cartQuentity <= 1}
              onClick={() => dispatch(decrement(carts.id))}
            >
              <FaMinus className="w-4 h-4" />
            </button>
            <h1 className="font-semibold">
              BDT {carts?.prodouctPrice * carts?.cartQuentity}
            </h1>
          </div>
          <div className="w-full col-span-3 flex justify-end">
            <button onClick={() => dispatch(removeFromCart(carts?.id))}>
              <FaTrash className="w-6 h-6 text-rose-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartDetails;
