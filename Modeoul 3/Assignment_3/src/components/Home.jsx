import AddProduct from "./AddProduct";
import Prodouct from "./Prodouct";

const Home = () => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 pt-5">
      <div className="w-full md:col-span-8">
        <Prodouct />
      </div>
      <div className="w-full md:col-span-4">
        <AddProduct />
      </div>
    </div>
  );
};

export default Home;
