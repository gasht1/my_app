import Image from "next/image"

const Footer = () => {
  return (
    <div className="flex w-full h-screen ">
        <div className="w-1/2 ">
            <Image src="/img/footer.jpg" className="w-full " 
             width={300}
             height={300}/>
        </div>
        <div className="flex justify-between w-1/2 p-4 border-separate shadow-lg border-spacing-1 shadow-blue-500 ">
            <div className="gap-3 p-3">
              <h1 className="font-serif text-lg font-bold uppercase"> find our products</h1>
              <p className="text-lg font-bold text-red-600 "> Gondar-Ethiopia around marki</p>
              <p className="text-lg font-bold text-red-600 "> Bahirdar-Ethiopia around keble 14</p>

            </div>
            <div  className="gap-3 p-3">
              <h1 className="font-serif text-lg font-bold uppercase">working hours</h1>
              <p className="text-lg font-bold text-red-600 ">You Can Order online at any time</p>
              <h1 className="text-red-400"> Monday until friday <span className="text-green-600">2:00 to 11:00 at shop</span></h1>

            </div>
        </div>

    </div>
  )
}
export default Footer