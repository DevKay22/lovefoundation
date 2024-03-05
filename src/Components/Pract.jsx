import React from 'react';
import { MdContactSupport } from "react-icons/md";
import { GiLifeSupport } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { RiPsychotherapyFill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";

const Pract = () => {
  return (
    <div className='container my-[4rem] pl-[5rem] bg-[#FFEBB9] pb-[5rem] '>
        <div className='pb-[3rem] pl-[3rem] pt-2'>
            <h1 className='text-[1.7rem] font-bold '>What we do for our kids with special needs</h1>
        </div>

        <div className='w-[90%] mx-auto'>
            {/* flex 1 */}
           <div className='flex mb-[2rem] '>
                {/* 1st div */}
                <div className='flex w-1/3 space-x-4'>
                     <div className='text-[1.2rem] text-white bg-black h-[1.7rem] mt-2 px-1 py-1 items-center justify-center flex rounded-md'>
                    < GiLifeSupport />

                    </div>

                    <div>
                        <h1 className='font-bold text-[1.2rem]'>
                            Family Support
                        </h1>

                        <p className='font-thin'>
                            Lorem ipsum mevu lala lolo Voluptatum doloremque, excepturi aperiam similique architecto unde a in deleniti quae et laborum nam.

                        </p>

                    </div>

                

                </div>


                {/* 2nd div */}
                <div className='flex w-1/3 space-x-4'>
                    <div className='text-[1.2rem] text-white bg-black h-[1.7rem] mt-2 px-1 py-1 items-center justify-center flex rounded-md'>
                    <MdHealthAndSafety  />

                    </div>

                    <div>
                        <h1 className='font-bold text-[1.2rem]'>
                            Health Benefit
                        </h1>

                        <p className='font-thin'>
                            Lorem ipsum mevu lala lolo Voluptatum doloremque, excepturi aperiam similique architecto unde a in deleniti quae et laborum nam.

                        </p>

                    </div>

                

                </div>

                {/* 3rd div */}
                <div className='flex w-1/3 space-x-4'>
                    <div className='text-[1.2rem] text-white bg-black h-[1.7rem] mt-2 px-1 py-1 items-center justify-center flex rounded-md'>
                    < MdCastForEducation />

                    </div>

                    <div>
                        <h1 className='font-bold text-[1.2rem]'>
                            Education
                        </h1>

                        <p className='font-thin'>
                            Lorem ipsum mevu lala lolo Voluptatum doloremque, excepturi aperiam similique architecto unde a in deleniti quae et laborum nam.

                        </p>

                    </div>

                

                </div>

                <div>

                </div>


            </div>

            <div className='flex '>
                {/* 1st div */}
                <div className='flex w-1/3 space-x-4'>
                     <div className='text-[1.2rem] text-white bg-black h-[1.7rem] mt-2 px-1 py-1 items-center justify-center flex rounded-md'>
                    <MdOutlineFamilyRestroom />

                    </div>

                    <div>
                        <h1 className='font-bold text-[1.2rem]'>
                            Basic Amenities
                        </h1>

                        <p className='font-thin'>
                            Lorem ipsum mevu lala lolo Voluptatum doloremque, excepturi aperiam similique architecto unde a in deleniti quae et laborum nam.

                        </p>

                    </div>

                

                </div>


                {/* 2nd div */}
                <div className='flex w-1/3 space-x-4'>
                    <div className='text-[1.2rem] text-white bg-black h-[1.7rem] mt-2 px-1 py-1 items-center justify-center flex rounded-md'>
                    <RiPsychotherapyFill />

                    </div>

                    <div>
                        <h1 className='font-bold text-[1.2rem]'>
                            Therapy
                        </h1>

                        <p className='font-thin'>
                            Lorem ipsum mevu lala lolo Voluptatum doloremque, excepturi aperiam similique architecto unde a in deleniti quae et laborum nam.

                        </p>

                    </div>

                

                </div>

                {/* 3rd div */}
                <div className='flex w-1/3 space-x-4'>
                    <div className='text-[1.2rem] text-white bg-black h-[1.7rem] mt-2 px-1 py-1 items-center justify-center flex rounded-md'>
                    <HiSpeakerphone />

                    </div>

                    <div>
                        <h1 className='font-bold text-[1.2rem]'>
                            Public Outreach
                        </h1>

                        <p className='font-thin'>
                            Lorem ipsum mevu lala lolo Voluptatum doloremque, excepturi aperiam similique architecto unde a in deleniti quae et laborum nam.

                        </p>

                    </div>

                

                </div>

                <div>

                </div>


            </div>

            <div>

            </div>

        </div>
    </div>
  )
}

export default Pract