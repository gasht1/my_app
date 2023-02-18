import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from "react-redux";

const Header = () => {
  const value = useSelector((state) => state.counter.value);

  return (
    <div className="container fixed z-50 flex w-full bg-gray-500 md:justify-between h-28 md:w-full" >
      
        <div className="">
          <Image src='/img/logo.png ' className="items-center justify-center h-20 shadow-gray-600 justify-items-center"
          width={80}
          height={24}
           />

        </div>
        <div>
          <ul className="flex items-center justify-center gap-6 px-6 py-12 font-bold leading-4 tracking-wider text-white uppercase cursor-pointer justify-items-end">
            <Link href='/'> <li>home</li></Link>
            <Link href='/'> <li>about </li></Link>
            <Link href='Product/1'> <li>shop</li></Link>
            <Link href='/orders/12'> <li>orders</li></Link>
            <Link href='/'  > <li>contact</li></Link>
            <Link href='/'> <li>account</li></Link>
            <Link href='/'> <button className="uppercase"> add to cart({value})</button></Link>
          </ul>
        </div>
      </div>
    
  );
};

export default Header;
