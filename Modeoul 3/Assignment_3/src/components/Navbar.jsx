import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  console.log(cartTotalAmount)

  return (
    <nav className="w-full  bg-slate-50 ">
      <div className="w-full h-24 max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-green-500 text-transparent bg-clip-text">
          Shopno
        </h1>
        <ul className="flex flex-col md:flex-row justify-between items-center gap-8  font-bold text-lg text-gray-700">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-pink-600" : "hover:text-pink-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-pink-600">About</li>
          <li className="cursor-pointer hover:text-pink-600">Prodouct</li>
          <li className="cursor-pointer hover:text-pink-600">Blogs</li>
          <li className="cursor-pointer hover:text-pink-600">Contact</li>
          <li className="relative">
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                isActive ? "text-pink-600" : "hover:text-pink-600"
              }
            >
              <FaCartPlus className="w-8 h-8" />{" "}
              <h1 className="absolute -top-6 -right-3 text-xl font-semibold">
              {cartTotalQuantity}
              </h1>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
