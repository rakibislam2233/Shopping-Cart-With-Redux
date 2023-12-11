import { useSelector } from "react-redux";
import ProdouctDetails from "./ProdouctDetails";

const Prodouct = () => {
  const prodoucts = useSelector(state =>state.prodoucts)
  return <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 pb-10">
    {
        prodoucts.map(prodouct=><ProdouctDetails key={prodouct.id} prodouct={prodouct}/>)
    }
  </div>;
};

export default Prodouct;
