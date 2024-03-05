import React from 'react';
import know from "../assets/Images/know.png";
import { IoLogoBitcoin } from "react-icons/io";
import { IoLogoPlaystation } from "react-icons/io5";
import { IoLogoStencil } from "react-icons/io5";
import { BiLogoDigitalocean } from "react-icons/bi";
import { BiLogoBlender } from "react-icons/bi";
import { BiLogoMeta } from "react-icons/bi";

const Mission = () => {


  return (
    
    <div className='container   bg-yellow-100 py-4 my-[3.5rem]'>
        <div className='mx-[5rem] mt-[3.5rem] '>
        <div className=' '>
            <img src={know} alt="" />
        
        </div>

        <div className='flex mx-[4rem] justify-between my-[4rem]'>
            <div className='w-[45%]'>
                <h1 className='font-medium mb-3'>
                    OUR MISSION
                </h1>

                <h2 className='font-bold text-[1.6rem] mb-3'>
                    We make sure to provide inclusive care for
                    children with special needs.
                </h2>

                <p className='font-thin text-[0.9rem]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quibusdam culpa magni quod. Quod velit dolorem similique autem modi,
                     nulla voluptates suscipit asperiores voluptate quasi, 
                     nobis eligendi magni! Quod, ratione facere.
                </p>
            </div>

            <div className='w-[45%]'>
                <h1 className='font-medium mb-3'>
                    OUR VISION
                </h1>

                <h2 className='font-bold text-[1.6rem] mb-3'>
                    Provide more inclusive care to children around 
                    the world.
                </h2>

                <p className='font-thin text-[0.9rem]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quibusdam culpa magni quod. Quod velit dolorem similique autem modi,
                     nulla voluptates suscipit asperiores voluptate quasi, 
                     nobis eligendi magni! Quod, ratione facere.
                </p>
            </div>

           

        </div>

        </div>

        <div className=''>
            <h1 className='text-[1.3rem] ml-[9rem] font-bold mb-3'>
                OUR SUPPORTERS
            </h1>

            <div className='flex justify-evenly mx-auto w-[90%]'>
                <div className='flex space-x-2'>
                    <div className='my-auto'>
                    <BiLogoMeta />
                    </div>

                    <p>
                        Meta
                    </p>

                </div>

                <div className='flex space-x-2'>
                    <div className='my-auto'>
                    <IoLogoBitcoin />
                    </div>

                    <p>
                        Bitcoin
                    </p>

                </div>

                <div className='flex space-x-2'>
                    <div className='my-auto'>
                    <BiLogoBlender />
                    </div>

                    <p>
                        Blender
                    </p>

                </div>

                <div className='flex space-x-2'>
                    <div className='my-auto'>
                    <BiLogoDigitalocean />
                    </div>

                    <p>
                        Digital Ocean
                    </p>

                </div>

                <div className='flex space-x-2'>
                    <div className='my-auto'>
                    <IoLogoStencil />
                    </div>

                    <p>
                        Stencil
                    </p>

                </div>

                <div className='flex space-x-2'>
                    <div className='my-auto'>
                    <IoLogoPlaystation />
                    </div>

                    <p>
                        Playstation
                    </p>

                </div>
            </div>

        </div>
        


    </div>
  )
}

export default Mission