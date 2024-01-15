import React from 'react';
import { TiMediaPlay } from "react-icons/ti";
import bg4 from "../assets/Images/hero.png"

const Care = () => {
  return (
    <div className='container  h-[30rem] w-[90%] mx-auto' 
    style= {{
      background: `url(${bg4})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
   >
        <div className='w-2/5 mt-[3.5rem]'>
          <h1 className='text-white font-bold text-[1.9em] ml-2 py-5 '>
            Inclusive care for <br />children with special <br /> needs
          </h1>
        </div>

        <div className='ml-2 flex space-x-2 mt-5' >

          <div>
          <a href="#" className='bg-white text-black px-3 py-2 rounded-md font-medium mr-6'>What we do</a>
          </div>

          <div className=''>
          <p className='flex space-x-1 justify-center items-center'> <span className='py-1  px-1 bg-white rounded-full mr-2 '><TiMediaPlay/></span> 
          <span className='text-white font-medium'>Play video</span></p>
          </div>
         
          
        </div>

        <div className='flex justify-between mt-[10rem] ml-2 text-white'>
        <div>
          <p>230 children under our care</p>
        </div>

        {/* <div className="border-t border-black font-bold my-4"></div> */}

        <div className='mr-[4rem] '>
          <p>68 donations collected</p>
        </div>

        </div>

       
    </div>
  )
}

export default Care