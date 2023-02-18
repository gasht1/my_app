import Image from 'next/image'
import React, { useState } from 'react'

const Home = () => {
  const[index,setIndex] =useState(0)
  const images=[
    "/img/feature1.jpg",
    "/img/feature2.jpg",
    "/img/feature3.jpg ",
  ];

  const HandleArrow =(direction)=>{
    if(direction==="l"){
      setIndex(index!==0 ? index-1 : 2)
    }
    if(direction==="r"){
      setIndex(index!==2 ? index+1 : 0)
    }

    
  }
 // console.log(index);
  return (
    <div key="" className='lg:flex w-full h-[35%] m-auto py-32 relative  md md:flex-col overflow-x-hidden '>
      <div className='leading-3 font-bold top-0 bottom-0 m-auto absolute h-[20%] w-[10%] left-0 cursor-pointer z-[2] object-contain' >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  onClick={()=>HandleArrow("l")}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
      </div>
 


      <div className=' w-[300vw] h-[550px]  flex md:grid-flow-col      ' style={{transform:`translateX(${-100*index}vw)`}}>
      {images.map((img,i)=>(
        <div key={i} className='md: flex md: w-[100vw] md:h-[550px] gap-5 md:w-full  sm:w-full  '>
          
            <Image   className="w-screen h-[620px] gap-3   "
          src={img}
         width={600}
         height={400}
          />
          
          </div>
          ))}

        
        
      </div>
      <div key="" className='leading-2 font-bold top-0 bottom-0 m-auto absolute h-[20%] w-[10%] right-0 cursor-pointer z-[2] object-contain' onClick={()=>HandleArrow("r")}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
        onClick={()=>HandleArrow("l")}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
      </div>

      



    </div>
  )
}

export default Home
