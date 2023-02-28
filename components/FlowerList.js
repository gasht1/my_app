import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, increment } from "../store/cartSlice";

const FlowerList = ({ image, desc, name, price, id }) => {
  const dispatch = useDispatch();

  return (
    <div className=" p-4 md:p-10 flex flex-col justify-center items-star cursor-pointer border-spacing-1">
      <Link href={`/product/${id}`} passHref>
        <div className="w-[350px] h-[200px] relative">
          <Image
            src={image}
            className=" rounded-lg shadow-md shadow-gray-500 "
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className="flex items-start flex-col pt-6 ">
        <h1 className="items-start font-bold text-red-500 uppercase">
         
          {name}
        </h1>
        <h1 className="items-start font-bold text-red-500 uppercase">
          {" "}
          price<span> {price} Br</span>
        </h1>
        <p className="items-start font-serif font-semibold leading-4 text-gray-700">
          {desc}
        </p>
      </div>
    </div>
  );
};
export default FlowerList;
