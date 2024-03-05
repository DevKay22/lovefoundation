import React from 'react';
import donation from '../assets/Images/journey.png'

const Journey = () => {
  return (
    <div className='container bg-[#F2C94C] flex justify-between mx-auto w-[80%] px-[4rem] py-[2rem] rounded-2xl'>
        <div className='w-[46%] my-[3rem] rounded-md flex flex-col space-y-3'>
            <p className='font-bold text-[0.8rem]'>OUR JOURNEY</p>
            
            <h1 className='font-bold text-[1.9rem]'>
                How we raised 34M
            </h1>

            <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Modi nam quasi praesentium quaerat eius perferendis non quisquam 
                inventore numquam eaque et tempore dolor voluptates omnis voluptas,
                 ipsa ea, delectus doloribus.
            </p>

            <div className='flex space-x-6'>
                <div className='flex flex-col'> 
                    <h1 className='font-bold text-[1.5rem]'>
                        34M+
                    </h1>
                    <p>
                        Donations received
                    </p>
                </div>

                <div className='flex flex-col '> 
                    <h1 className='font-bold text-[1.5rem]'>
                        400+
                    </h1>
                    <p>
                        Volunteers
                    </p>
                </div>

                <div className='flex flex-col '> 
                    <h1 className='font-bold text-[1.5rem]'>
                        20+
                    </h1>
                    <p>
                        Care homes
                    </p>
                </div>

            </div>

        </div>

        <div>

        </div>

        <div className='w-[46%] '>
            <img src={donation} alt="" className='h-[100%]'/>

        </div>

    </div>
  )
}

export default Journey