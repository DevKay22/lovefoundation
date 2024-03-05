import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";

const Talk = () => {
  return (
    <div className='container flex bg-[#FFEBB9]  mx-auto  '>
        <div className='flex flex-col space-y-[1rem] w-[45%] px-[6rem] py-[4rem]'>
            <h2 className='text-[0.87rem] font-bold'>
                CONTACT US
            </h2>

            <h1 className='text-[2.8rem] font-bold'>
                We'd love to hear from you
            </h1>

            <p className='text-[0.89rem] font-thin text-gray-500'>
                Have any question in mind or want to enquire?
                Please feel free to contact us through the form or 
                the following details
            </p>
        </div>

        <div className='flex flex-col space-y-[1rem] w-[45%] px-[6rem] py-[4rem]'>
            <div className='mb-4'>
                <h1 className='font-bold text-[1.2rem] mb-2'>
                    Let's talk!
                </h1>

                <div className='flex space-x-4 text-[0.8rem] text-gray-600'>
                    <p className=''>2349071283244</p>

                    <p>
                        drkay4sure@gmail.com
                    </p>
                </div>
            </div>

            <div className='mb-4'>
                <h1 className='font-bold text-[1.2rem] mb-2'>
                    Head Office
                </h1>

                <div className='flex  flex-col space-y-1 text-[0.8rem] text-gray-600'>
                    <p className=''>8, Brewery Drive, lagos,</p>

                    <p>
                        Nigeria
                    </p>
                </div>
            </div>

            <div className='mb-4'>
                <h1 className='font-bold text-[1.2rem] mb-2'>
                    Branch Office
                </h1>

                <div className='flex  flex-col space-y-1 text-[0.8rem] text-gray-600'>
                    <p className=''>Opp Opolo round about, Yenegoa, Bayelsa</p>

                    <p>
                        Nigeria.
                    </p>
                </div>
            </div>
            <div className='flex space-x-2 font-bold text-[1.2rem] mt-2'>
                        <div>
                        <IoLogoFacebook />
                        </div>
                        <div>
                        <IoLogoTwitter />
                        </div>
                        <div>
                        <IoLogoInstagram />
                        </div>


                    </div>
        </div>

    </div>
  )
}

export default Talk