import Image from "next/image";
import { useState } from "react";

const Product = () => { 
    const [size, setSize] =useState(0)
    const  flower ={
        id :1,
        name:"ethio_flower",
        image:'/img/flower1.jpg',
        price:[100,200,450],
        desc:"this the best flower in ethiopia The vibrant display of flowers covered the ground. Bold purple, soft pink and light lavender flowers sat right in front of me. There was a faint sound of ..."

    };
  return (
    <div className="flex">
        <div className="w-1/2 p-10">
            <Image src={flower.image} className ="rounded-md shadow-md shadow-orange-600"
            width ={500}
            height={500}
            />

        </div>
        <div className="w-1/2 p-10">
            <h1 className="text-lg font-extrabold leading-3 text-black uppercase">{flower.name}</h1>
           <div className="py-4"> 
           <span className="text-lg text-orange-400 ">${flower.price[size]}</span>
           </div>
            <p className="font-semibold text-gray-500 ">{flower.desc}</p>
            <div className="py-3">
            <h3 className="font-bold uppercase">choose your size</h3>
            <div className="flex items-center gap-4 p-2 py-3 font-extrabold px-7">
                <button className="items-center w-20 space-x-1 text-center bg-red-500 rounded-lg " onClick={()=>setSize(0)}>small</button>
                <button className="items-center w-20 space-x-1 text-center bg-red-500 rounded-lg " onClick={()=>setSize(1)}> medium</button>
                <button className="items-center w-20 space-x-1 text-center bg-red-500 rounded-lg " onClick={()=>setSize(2)}> large</button>
            </div>

            </div>
            <div className="gap-4">
                <input type="number" defaultValue={1} className ="w-[50px] h-[30px] bg-slate-400"/>
                <button  className="items-center w-24 h-12 ml-3 font-bold leading-3 text-center text-black bg-red-500 border-none rounded-lg"> add to cart</button>
            </div>
            
        </div>


    </div>
  )
}
export default Product