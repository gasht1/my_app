import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, increment } from "../store/cartSlice";

const FlowerList = ({ image, desc, name, price, id }) => {
  const dispatch = useDispatch();


  return (
    <div className="w-[50%] p-10 justify-center items-center pt-20 pb-20 pl-40 pr-40 cursor-pointer border-spacing-1">
      <Link href={`/product/${id}`} passHref >
        <Image
          src={image}
          className="rounded-lg shadow-md shadow-gray-500"
          width={600}
          height={600}
        />
      </Link>
      <h1 className="items-center font-bold text-red-500 uppercase"> {name}</h1>
      <h1 className="items-center font-bold text-red-500 uppercase">
        {" "}
        price<span> {price} Br</span>
      </h1>
      <p className="items-center font-serif font-semibold leading-4 text-gray-700">
        {desc}
      </p>
    </div>
  );
};
export default FlowerList;
