import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import { addProduct } from "../../store/cartSlice";

const Product = ({ flower }) => {
  const [price, setPrice] = useState(flower.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);
  
  const handleClick = async () => {
    if (!user) {
      router.push("/login");
    } else {
      dispatch(addProduct({ ...flower, price, quantity }));
      router.push("/cart");
      await axios.post("http://localhost:3000/api/orders",{
        customerName:user.username,
        phone:user.phone,
        price:flower.prices[size],
        quantity:quantity,
        title:flower.title,
      })
    }
  };

  return (
    <>
    <Header/>
      <div className="flex pt-40">
        <div className="w-1/2 p-10">
          <Image
            src={flower.img}
            className="rounded-md shadow-md shadow-orange-600"
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2 p-10">
          <h1 className="text-lg font-extrabold leading-3 text-black uppercase">
            {flower.title}
          </h1>
          <div className="py-4">
            <span className="text-lg text-orange-400 ">
              ${flower.prices[size] * quantity}
            </span>
          </div>
          <p className="font-semibold text-gray-500 ">{flower.desc}</p>
          <div className="py-3">
            <h3 className="font-bold uppercase">choose your size</h3>
            <div className="flex items-center gap-4 p-2 py-3 font-extrabold px-7">
              <button
                className="items-center w-20 space-x-1 text-center bg-red-500 rounded-lg "
                onClick={() => setSize(0)}
              >
                small
              </button>
              <button
                className="items-center w-20 space-x-1 text-center bg-red-500 rounded-lg "
                onClick={() => setSize(1)}
              >
                {" "}
                medium
              </button>
              <button
                className="items-center w-20 space-x-1 text-center bg-red-500 rounded-lg "
                onClick={() => setSize(2)}
              >
                {" "}
                large
              </button>
            </div>
          </div>
          <div className="gap-4">
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              defaultValue={1}
              className="w-[50px] h-[30px] bg-slate-400"
            />
            <button
              onClick={handleClick}
              className="items-center w-24 h-12 ml-3 font-bold leading-3 text-center text-black bg-red-500 border-none rounded-lg"
            >
              {" "}
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { data } = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      flower: data,
    },
  };
}

export default Product;
