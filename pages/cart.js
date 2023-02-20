import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const cart = () => {
  const Products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  return (
    <>
      <Header />

      <div className="flex py-40">
        <div className="w-1/2 ">
          <ul className="flex gap-16 font-extrabold leading-4 text-center underline uppercase">
            <li>product</li>
            <li className="px-12">name</li>
            <li>price</li>
            <li> quantity</li>
            <li>total price</li>
          </ul>
          {Products.map((product, index) => (
            <div className="flex  gap-11" key={index}>
              <div className="relative rounded-lg w-36 h-36 shadow-orange-500">
                <Image
                  src={product.img}
                  className="relative"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <span className="font-bold text-red-600 ">{product.title}</span>
              </div>
              <div className="px-4">
                <span>{product.price}</span>
              </div>
              <div className="px-9">
                <span>{product.quantity}</span>
              </div>
              <div className="px-16 font-bold text-violet-600 ">
                <span>{product.price * product.quantity}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/4">
          <div className="w-[90%] h-[260px] bg-gray-700 text-white uppercase font-bold py-10 items-center justify-center px-8">
            <h1 className="items-center justify-center px-6 font-extrabold leading-8">
              cart total
            </h1>
            <p className="py-4">
              subtotal : <span className="text-red-500">{total}</span> br
            </p>
            <p>
              discount : <span>0.0</span> br
            </p>
            <p>
              total : <span>{total}</span> br
            </p>
            <div className="py-6">
              <button className="w-32 py-4 bg-red-500 rounded-lg">
                checkout now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default cart;
