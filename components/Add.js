import axios from "axios";
import React, { useState } from "react";

const AddProduct = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prices, setPrices] = useState([]);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const upload = await axios.post(
        `https://api.cloudinary.com/v1_1/dh1k8jxio/image/upload`,
        data
      );
      const { url } = upload.data;
      console.log(url);

      await axios.post("http://localhost:3000/api/products", {
        title,
        desc: description,
        img: url,
        prices,
      });
      setClose(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen  w-full  items-center justify-center bg-opacity-40 bg-clip-padding backdrop-blur-md backdrop-filter">
      <div className=" relative mx-3 h-[535px] w-full rounded-md border border-gray-400 bg-slate-100 shadow-xl md:w-[400px]">
        <div className="flex flex-col space-y-2 px-5 pt-5 ">
          <h1 className="text-3xl font-bold text-gray-800">Add a new flower product</h1>
          <div className="my-3 flex flex-col text-sm font-semibold">
            <label className="pb-[2px] text-sm font-semibold text-gray-800">
              Choose an image
            </label>
            <input
              type="file"
              className="mt-1 cursor-pointer text-xs"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className=" flex flex-col">
            <label className="py-1 text-sm font-semibold text-gray-800">
              Title
            </label>
            <input
              className="border-b border-gray-400 px-2 py-2 text-xs font-semibold text-gray-600 outline-none focus:rounded-md focus:border-b-2 "
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="pb-1 text-sm font-semibold text-gray-800">
              description
            </label>
            <textarea
              className="border-b border-gray-400 px-2 py-2 text-xs font-semibold text-gray-600 outline-none focus:rounded-md focus:border-b-2"
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="pb-[2px] text-sm font-semibold text-gray-800">
              Prices
            </label>
            <div className="flex justify-between">
              <input
                className="max-w-[100px] border-b border-gray-400 px-2 py-2 text-xs font-semibold text-gray-600 outline-none focus:rounded-md focus:border-b-2"
                type="number"
                min={1}
                placeholder="Small"
                onChange={(e) => changePrice(e, 0)}
              />
              <input
                className="max-w-[100px] border-b border-gray-400 px-2 py-2 text-xs font-semibold text-gray-600 outline-none focus:rounded-md focus:border-b-2"
                type="number"
                min={1}
                placeholder="Medium"
                onChange={(e) => changePrice(e, 1)}
              />
              <input
                className="max-w-[100px] border-b border-gray-400 px-2 py-2 text-xs font-semibold text-gray-600 outline-none focus:rounded-md focus:border-b-2"
                type="number"
                min={1}
                placeholder="Large"
                onChange={(e) => changePrice(e, 2)}
              />
            </div>
          </div>
          <div className="mt-2 flex  w-full items-end">
            <button
              className="w-full rounded-sm bg-red-500 px-4 py-[3px] text-base font-semibold text-gray-50 shadow-md transition duration-300 hover:scale-105 active:scale-95"
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
        </div>
        <div className="absolute -top-10 right-[50%] md:-top-6 md:-right-6 ">
          <div
            onClick={() => setClose(true)}
            className="relative text-red-700 text-4xl  h-5 w-5   cursor-pointer rounded-full transition  "
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
