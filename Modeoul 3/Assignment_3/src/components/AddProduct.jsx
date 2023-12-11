import { useDispatch } from "react-redux";
import { added } from "../redux/prodoucts/action";

const AddProduct = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const prodouctName = form.prodouctName.value;
    const prodouctCategory = form.prodouctCategory.value;
    const prodouctImageUrl = form.prodouctImageUrl.value;
    const prodouctPrice = form.prodouctPrice.value;
    const prodouctQuantity = form.prodouctQuantity.value;
    const prodouctDetails = {
      prodouctName,
      prodouctCategory,
      prodouctImageUrl,
      prodouctPrice,
      prodouctQuantity
    }
   dispatch(added(prodouctDetails))
   alert('Prodouct added successfully')
   form.reset()
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="py-5 border  p-5 space-y-3 text-gray-700 rounded">
        <h3 className="text-2xl font-semibold text-center pb-3">Add Prodouct</h3>
        <div>
          <label className="font-semibold" htmlFor="prodouctName">Prodouct Name</label>
          <input
            type="text"
            name="prodouctName"
            id="prodouctName"
            className="w-full px-3 py-1 border-2 border-gray-500 outline-none focus:border-green-500 rounded"
            required
          />
        </div>
        <div>
          <label className="font-semibold" htmlFor="prodouctCategory">Prodouct Category</label>
          <input
            type="text"
            name="prodouctCategory"
            id="prodouctCategory"
            className="w-full px-3 py-1 border-2 border-gray-500 outline-none focus:border-green-500 rounded"
            required
          />
        </div>
        <div>
          <label className="font-semibold" htmlFor="prodouctImageUrl">Prodouct Image Url</label>
          <input
            type="text"
            name="prodouctImageUrl"
            id="prodouctImageUrl"
            className="w-full px-3 py-1 border-2 border-gray-500 outline-none focus:border-green-500 rounded"
            required
          />
        </div>
        <div className="flex justify-between gap-5">
        <div>
          <label className="font-semibold" htmlFor="prodouctPrice">Prodouct Price</label>
          <input
            type="number"
            name="prodouctPrice"
            id="prodouctPrice"
            className="w-full px-3 py-1 border-2 border-gray-500 outline-none focus:border-green-500 rounded"
            required
          />
        </div>
        <div>
          <label className="font-semibold" htmlFor="prodouctQuantity">Prodouct Quantity</label>
          <input
            type="number"
            name="prodouctQuantity"
            id="prodouctQuantity"
            className="w-full px-3 py-1 border-2 border-gray-500 outline-none focus:border-green-500 rounded"
            required
          />
        </div>
        </div>
       <div className="py-3">
       <button className="w-full px-3 py-2 bg-pink-600 rounded  text-white font-semibold">Add Prodouct</button>
       </div>
      </form>
    </>
  );
};

export default AddProduct;
