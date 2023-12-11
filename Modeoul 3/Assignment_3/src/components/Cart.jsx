import { useSelector } from "react-redux";
import CartDetails from "./CartDetails";
import PaymentDetails from "./PaymentDetails";
const Cart = () => {
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  console.log(cartTotalAmount);
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 pt-5">
      <div className="md:col-span-8 pb-10">
        <CartDetails />
      </div>
      <div className="md:col-span-4">
        <PaymentDetails />
      </div>
    </div>
  );
};

export default Cart;
