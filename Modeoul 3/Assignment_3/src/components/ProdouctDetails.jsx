import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cart/action"
import { decrementQuentity } from "../redux/prodoucts/action"
import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const ProdouctDetails = ({prodouct}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const {id,prodouctName,prodouctCategory,prodouctImageUrl,prodouctPrice,prodouctQuantity} = prodouct
    const Add_To_Cart = (prodouctDetails,prodouctId)=>{
      dispatch(addToCart(prodouctDetails,prodouctId))
      dispatch(decrementQuentity(prodouctId))
      navigate('/cart')
    }
  return (
    <div className="w-full h-full border rounded">
        <img className="w-full h-56 rounded" src={prodouctImageUrl} alt="prodouctImage" />
      <div className="p-3 space-y-3">
        <h3 className="text-xl font-semibold">{prodouctName}</h3>
        <h3 className="font-semibold">{prodouctCategory}</h3>
        <div className="flex justify-between gap-5 items-center">
            <h3 className="font-semibold">BDT {prodouctPrice}</h3>
            <h3 className="font-semibold">QTY {prodouctQuantity}</h3>
        </div>
        <button disabled={prodouct.prodouctQuantity <= 0} onClick={()=>Add_To_Cart(prodouct,id)} className="w-full px-3 py-2 bg-pink-600 rounded  text-white font-semibold">Add To Cart</button>
      </div>
    </div>
  )
}

export default ProdouctDetails
