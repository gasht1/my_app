import Image from "next/image"

const cart = () => {
  return (
    <div className="flex py-6">
        <div className="w-1/2 ">
            
                <ul className="flex gap-16 font-extrabold leading-4 text-center underline uppercase">
                    <li>product</li>
                    <li className="px-12">name</li>
                    <li>price</li>
                    <li> quantity</li>
                    <li >total price</li>
              </ul>
              <div className="flex py-6 gap-11">
                <div className="relative rounded-lg w-36 h-36 shadow-orange-500">
                    
                        <Image src="/../public/img/flower1.jpg" className="relative" 
                        width={500}
                        height={500}
                        />
                    
                </div>
                <div>
                    <span className="font-bold text-red-600 ">ethio_flower</span>
                </div>
                <div className="px-4">
                    <span>300br</span>
                </div>
                <div className="px-9">
                    <span>3</span>
                </div>
                <div className="px-16 font-bold text-violet-600 ">
                    <span>900br</span>
                </div>
                
              
        

        </div>
        </div>
        <div className="w-1/4">
            <div className="w-[90%] h-[260px] bg-gray-700 text-white uppercase font-bold py-10 items-center justify-center px-8">
                <h1 className="items-center justify-center px-6 font-extrabold leading-8">cart total</h1>
                <p className="py-4">subtotal :<span className="text-red-500">906</span>br</p>
                <p>discount :<span>0.0</span>br</p>
                <p>total :<span>906</span>br</p>
                <div className="py-6">
                <button className="w-32 py-4 bg-red-500 rounded-lg">checkout now</button>
                </div>
            </div>

        </div>

    </div>
  )
}
export default cart