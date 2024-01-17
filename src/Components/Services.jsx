import React from 'react';
import pic from '../assets/Images/blog31.jpg';
import { MdSupportAgent } from "react-icons/md";
import { PiPiggyBankBold } from "react-icons/pi";
import { IoMdSchool } from "react-icons/io";
import { TbPhysotherapist } from "react-icons/tb";

const Services = () => {
  return (
    <div className='container flex mt-[5rem] mx-auto bg-[#FFEBB9]  space-x-[4.5rem] pb-[4rem]
    '>
        <div className='w-2/5 flex flex-col mx-[3rem]'>

            <div className='mt-[2.5rem] ml-[2rem] flex flex-col space-y-[1rem]'>
            <h1 className='font-medium'>
                WHAT WE DO
            </h1>
            
            <h1 className='text-[2.1rem] font-bold'>
                Some services we provide for our clients
            </h1>

            <p className='text-[1.1em] font-thin'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit ullam pariatur alias molliti
            </p>

            </div>
           

            <div className='flex flex-col ml-5'>
                <div className='flex space-x-[1.0rem] ml-[2rem] mt-[1.2rem]'>
                    <div className='bg-black h-[1.4rem] w-[2.2rem] flex justify-center items-center rounded-sm text-white'>
                    <MdSupportAgent />
                    </div>

                    <div>
                        <h1 className='font-bold mb-2'>
                            Family support
                        </h1>

                        <p className='font-thin'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit natus id ex ullam necessitatibus impedit assumenda blanditiis eaque obcaecati recusandae il
                        </p>
                    </div>

                </div>

                <div className='flex space-x-[1.0rem] ml-[2rem] mt-[1.2rem]'>
                    <div className='bg-black h-[1.4rem] w-[2.2rem] flex justify-center items-center rounded-sm text-white'>
                    <PiPiggyBankBold />
                    </div>

                    <div>
                        <h1 className='font-bold mb-2'>
                            Health benefits
                        </h1>

                        <p className='font-thin'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit natus id ex ullam necessitatibus impedit assumenda blanditiis eaque obcaecati recusandae il
                        </p>
                    </div>

                </div>

                <div className='flex space-x-[1.0rem] ml-[2rem] mt-[1.2rem]'>
                    <div className='bg-black h-[1.4rem] w-[2.2rem] flex justify-center items-center rounded-sm text-white'>
                    <IoMdSchool />
                    </div>

                    <div>
                        <h1 className='font-bold mb-2'>
                            Scholarship
                        </h1>

                        <p className='font-thin'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit natus id ex ullam necessitatibus impedit assumenda blanditiis eaque obcaecati recusandae il
                        </p>
                    </div>

                </div>

                <div className='flex space-x-[1.0rem] ml-[2rem] mt-[1.2rem]'>
                    <div className='bg-black h-[1.4rem] w-[2.2rem] flex justify-center items-center rounded-sm text-white'>
                    <TbPhysotherapist />
                    </div>

                    <div>
                        <h1 className='font-bold mb-2'>
                            Therapy
                        </h1>

                        <p className='font-thin'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit natus id ex ullam necessitatibus impedit assumenda blanditiis eaque obcaecati recusandae il
                        </p>
                    </div>

                </div>


            </div>

        </div>

        <div className='w-2/5 mx-auto mt-[15rem] '>
            <img src={pic} alt=""   className='h-[30rem] w-[100%] rounded-3xl'/>


        </div>

        
    </div>
  )
}

export default Services