import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const PaymentDetails = () => {
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  console.log(cartTotalAmount)

  return (
    <div className="w-full border p-5 rounded">
      <h3 className="text-2xl font-bold text-center">Payment Details</h3>
      <div className="py-5 space-y-5">
        <div className="flex justify-between items-center font-semibold text-xl">
          <h1>Sub Total</h1>
          <h1>BDT {cartTotalAmount}</h1>
        </div>
        <div className="flex justify-between items-center font-semibold text-xl">
          <h1>Discount</h1>
          <h1>BDT 0</h1>
        </div>
        <div className="flex justify-between items-center font-semibold text-xl">
          <h1>VAT</h1>
          <h1>BDT 0</h1>
        </div>
        <div className="flex justify-between items-center font-semibold text-xl">
          <h1>Total</h1>
          <h1>BDT {cartTotalAmount}</h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
