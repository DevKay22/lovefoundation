import React from 'react';
import col from '../assets/Images/blog75.jpg'

const Spend = () => {
  return (
    <div className='container bg-black text-white flex py-[5rem] px-[5rem] justify-between'>

        <div className='flex flex-col w-1/2 '>
            <h1 className='text-[1.9rem] mb-[1.3rem]'>
                How we spend your donations and where it goes
            </h1>

            <p className='text-[0.9rem] font-thin mb-[1.3rem] font-bold'>
                We understand that when you make a donation,
                you want to know exactly where your money is going 
                and we pledge to be transparent.
            </p>

            <div className='flex mt-3'>
                {/* items */}
                <div className='w-1/3 flex text-[0.8em]'>
                    <div className='bg-purple-200 rounded-sm h-[1.0em] w-[1.0em] mr-2 mt-1'></div>
                    <p>40% child care home</p>

                </div>

                <div className='w-1/3 flex text-[0.8em]'>
                    <div className='bg-green-200 rounded-sm h-[1.0em] w-[1.0em] mr-2 mt-1'></div>
                    <p>35% cleaniness program</p>

                </div>

                <div className='w-1/3 flex text-[0.8em]'>
                    <div className='bg-yellow-200 rounded-sm h-[1.0em] w-[1.0em] mr-2 mt-1'></div>
                    <p>10% helping people</p>

                </div>



            </div>

            <div className='flex mt-3'>
                {/* items */}
                <div className='w-1/3 flex text-[0.8em]'>
                    <div className='bg-pink-200 rounded-sm h-[1.0em] w-[1.0em] mr-2 mt-1'></div>
                    <p>10% excursions
                    </p>

                </div>

                <div className='w-1/3 flex text-[0.8em]'>
                    <div className='bg-orange-200 rounded-sm h-[1.0em] w-[1.0em] mr-2 mt-1'></div>
                    <p>5% feeding the poor</p>

                </div>



            </div>

        </div>

        <div>
            <img src={col} alt="" className='w-[15rem] h-[15rem] rounded-full mt-5'  />

        </div>

    </div>
  )
}

export default Spend