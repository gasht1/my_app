import axios from "axios";
import FlowerList from "../components/FlowerList";
import Footer from "../components/Footer";
import Products from "../data/products";

const Shop = ({ flowerList }) => {
  return (
    <div className="justify-center w-full h-screen m-auto text-center  ">
      <h1 className="text-lg font-bold leading-4 underline uppercase">
        the best flower in town
      </h1>
      <p className="items-center pt-4 font-serif text-lg leading-4 text-slate-600 ">
        Flowers are fragrant, beautiful and colourful, and they keep your mind
        afresh.
        <br />
        Describing a flower is not really difficult,but finding the best word to
        describe all .<br />
        Adjectives are words which are used to describe a noun or the nature of
        the noun. <br />
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center  w-full pt-20  ">
        {flowerList.map((item) => (
          <FlowerList
            key={item.id}
            name={item.title}
            image={item.img}
            id={item._id}
            price={item.prices[0]}
            desc={item.desc}
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
