import axios from "axios";
import Image from 'next/image';
import React from 'react'



const index = ({orders,products}) => {
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
          {products.map((product) => (
            <tbody key={product._id} >
             
             
              <tr className="{styles.trTitle}">
                <td  className="py-8"
                >
                  <Image className="rounded-lg shadow-md shadow-gray-500 " 
                  src={product.img} 

                  
                  width={100}
                  height={100}
                  />
                </td>
                <td>{product._id.slice(0,5)}.....</td>
                 <td>{product.title}</td>
                <td>{product.prices}br</td>
                <td>
                  <button className="{styles.button} border-none text-white p-1 cursor-pointer bg-teal-300 mr-3       ">Edit</button>
                  <button
                    className="{styles.button} border-none text-white p-1 cursor-pointer bg-red-500 mr-3  "
                    
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
            <tr className="{styles.trTitle} gap-4 border-spacing-5 text-left" >
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          
            <tbody >
              <tr className="{styles.trTitle}">
                <td>{"23234355".slice(0,5)}.....</td>
                <td>Customer</td>
                <td>$total</td>
                <td>paid</td>
                <td>preparing</td>
                <td>
                  <button >
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          
        </table>
      </div>
    </div>

  );
};
//const {orderResponse} = await axios.get("http://localhost:3000/api/orders");

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/products");
  
 
  return {
    props: {
      products:data,
    },
  };
}

 


  


export default index