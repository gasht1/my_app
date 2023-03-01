import React from 'react'
import Header from '../components/Header';

const Contact = () => {
  return (
    <>
    <Header />
    
    
    
    
      
      <div className="py-40 text-gray-800">
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 md:w-6/12 lg:px-6">
            <h2 className="text-3xl font-bold mb-6">Contact us</h2>
            <p className="text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudanum, modi accusantium ipsum corporis quia asperioresolorem nisi corrupti eveniet dolores ad maiores repellendus enim
              autem omnis fugiat perspiciatis? Ad, veritatis.
            </p>
            <p className="text-gray-500 mb-2">ethiopia, Gondar</p>
            <p className="text-gray-500 mb-2">+251946111937</p>
            <p className="text-gray-500 mb-2">Apparentstudent@gmail.com</p>
          </div>
          <div className="grow-0 lg:px-6">
            <form>
              <div className="mb-6">
                <input type="text" className="  bg-slate-300 
                  py-1.5
                  text-base
                  text-gray-700

                  
                  border-2

                  rounded
                  transition
                  m-0 focus:border-blue-600 focus:outline-none" id="exampleInput7"
                  placeholder="Name" />
              </div>
              <div className="form-group mb-6">
                <input type="email" className=" bg-slate-300
                 text-gray-700 outline-none" 
                  placeholder="Email address"/>
              </div>
              <div className="form-group mb-6">
                <textarea className="  w-full bg-slate-300
                  
                
                  
                  outline-none
                "  rows="3" placeholder="Message"></textarea>
              </div>
              <div className="form-group form-check text-center mb-6">
                <input type="checkbox"
                  className="mt-4"
                  />
                <label className=" bg-blue-700 text-lg uppercase rounded-full py-2 px-6 mt-10 hover:bg-blue-8">Send me a copy of this
                  message</label>
              </div>
              <button type="submit" className=" bg-red-700 text-lg uppercase rounded-full py-2 px-6 mt-10 hover:bg-blue-8
                 ">Send</button>
            </form>
          </div>
        </div>
      </div>
      
    
   
    
        

    
    </>
  );
};

export default Contact;