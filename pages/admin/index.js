import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Index = ({ orders, products }) => {
  const [productsList, setProductsList] = useState(products);
  const [ordersList, setOrdersList] = useState(orders);
  const [isAdmin, setAdmin] = useState();
  const router = useRouter();

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      setProductsList(productsList.filter((flower) => flower._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      setAdmin(admin);
    } else {
      router.push("/admin/login");
      setAdmin(null);
    }
  }, []);

  return (
    <div className="p-20 flex">
      <div className="{styles.item} flex-1">
        <h1 className="{styles.title}">Products</h1>
        <table className="{styles.table} w-full border-spacing-5 text-left ">
          <tbody>
            <tr className="{styles.trTitle}">
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {productsList.map((product) => (
            <tbody key={product._id}>
              <tr className="{styles.trTitle}">
                <td className="py-8">
                  <Image
                    className="rounded-lg shadow-md shadow-gray-500 "
                    src={product.img} alt="hello"
                    width={100}
                    height={100}
                  />
                </td>
                <td>{product._id.slice(0, 5)}.....</td>
                <td>{product.title}</td>
                <td>{product.prices[0]} br</td>
                <td>
                  <button className="{styles.button} border-none text-white p-1 cursor-pointer bg-teal-300 mr-3">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="{styles.button} border-none text-white p-1 cursor-pointer bg-red-500 mr-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="{styles.item} flex-1">
        <h1 className="{styles.title}">Orders</h1>
        <table className="{styles.table} w-full border-spacing-5 gap-4 text-left">
          <tbody>
            <tr className="{styles.trTitle} gap-4 border-spacing-5 text-left">
              <th>Id</th>
              <th>product name</th>
              <th>Customer</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
              <th>phone</th>
              <th>stage</th>
            </tr>
          </tbody>

          <tbody>
            {ordersList.map((item) => (
              <tr key={item._id} className="{styles.trTitle}">
                <td>{item._id.slice(0, 5)}.....</td>
                <td>{item.title}</td>
                <td>{item.customerName}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity*item.price}</td>
                <td>{item.phone}</td>
                <td>
                  <button>Next Stage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
//const {orderResponse} = await axios.get("http://localhost:3000/api/orders");

export async function getServerSideProps(ctx) {
  const { data } = await axios.get("http://localhost:3000/api/products");
  const { data: orders } = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      products: data,
      orders,
    },
  };
}

export default Index;
