import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from "react-redux";

const Header = () => {
  const value = useSelector((state) => state.cart.quantity);


  return (
    <div className="container fixed z-50 flex min-w-full bg-gray-500 md:justify-between h-28 md:w-full" >
      
        <div className="hidden sm:flex ">
          <Image src='/img/headerlogo.png' alt="image" className="items-center justify-center h-20 shadow-gray-600 justify-items-center"
          width={80}
          height={24}
           />

        </div>
        <div>
          <ul className="flex items-center justify-center gap-2 md:gap-3 px-6 py-12 text-xs sm:text-base md:text-lg font-bold md:leading-4 md:tracking-wider text-white uppercase cursor-pointer justify-items-end">
            <Link href='/'> <li>home</li></Link>
            <Link href='/'> <li>about </li></Link>
            <Link href='Product/1'> <li>shop</li></Link>
            <Link href='/orders/12'> <li>orders</li></Link>
            <Link href='/'  > <li>contact</li></Link>
            <Link href='/'> <li>account</li></Link>
            <Link href='/cart'> <button className="uppercase"> add to cart({value})</button></Link>
          </ul>
        </div>
      </div>
    
  );
};

export default Header;
