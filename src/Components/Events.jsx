import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Events = () => {
  return (
    <div className='container w-[80%] mx-auto mt-[4rem]  '>
        <div className='mb-[3rem]'>
            <h1 className='text-[1.7em] font-bold'>Our Events</h1>
        </div>

        <div className='flex mb-[3rem] justify-between'>

          {/* events */}

        <div className=' flex justify-between  w-[45%] bg-yellow-400 px-6 py-5 h-[8rem] 
            rounded-xl'>
                <div className='w-[3.0em]'>
                <h1 className='font-bold text-[1.8em] mb-2'>13</h1>
                <p className='font-bold '>APR</p>

                </div>

                <div className='w-3/5 '>
                <p className='mt-2'>NEXT EVENTS</p>
                <h1 className='font-bold text-[1.1em]'>A day with our wonderful children</h1>

                </div>

                <div className='bg-white flex  text-center h-[2em] 
                 my-auto ml-3  rounded-full py-2 px-2'>
                 <FaLongArrowAltRight  />

                </div>
            </div>

            <div className=' flex justify-between  w-[45%] bg-yellow-400 px-6 py-5 h-[8rem] 
            rounded-xl'>
                <div className='w-[3.0em]'>
                <h1 className='font-bold text-[1.8em] mb-2'>13</h1>
                <p className='font-bold '>APR</p>

                </div>

                <div className='w-3/5 '>
                <p className='mt-2'>NEXT EVENTS</p>
                <h1 className='font-bold text-[1.1em]'>A day with our wonderful children</h1>

                </div>

                <div className='bg-white flex  text-center h-[2em] 
                 my-auto ml-3  rounded-full py-2 px-2'>
                 <FaLongArrowAltRight  />

                </div>
            </div>
           

           

        </div>

    </div>
  )
}

export default Events