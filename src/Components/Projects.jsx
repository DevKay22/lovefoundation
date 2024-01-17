import React from 'react';
import bg4 from "../assets/Images/hero.png"

const Projects = () => {
  return (
    <div className='container my-[5rem] px-[5rem]' >
        <div className='w-2/5'>
            <p className='font-medium '>
                PROJECTS WE HAVE DONE
            </p>

            <h1 className='font-bold  mt-2 text-[2.0rem] ml-3 mb-5'>
                We are creating a place where children with special needs can thrive
            </h1>
        </div>

        <div className='flex space-x-[2rem] mx-auto'>

            {/* each item */}
            <div className='w-[30%] bg-blue-200 rounded-2xl py-5 px-[1.5rem] flex flex-col' 
             style= {{
                background: `url(${bg4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}>
                <h1 className='mt-3 font-bold text-[1.4rem] mb-3 text-white'>
                    Mission smile 1k: Outdoor charity
                </h1>

                <p className='mb-[2.4rem] text-white'>
                    Lorem ipsum dolor sit amet consectetur illo praesentium porro explicabo earum ipsam quis tempora non tem
                </p>

                <a href="#" className='bg-white px-2 py-2 rounded-sm w-[8rem] text-center font-medium'> Learn more</a>


            </div>

            <div className='w-[30%] bg-blue-200 rounded-2xl py-5 px-[1.5rem] flex flex-col'
             style= {{
                background: `url(${bg4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}>
                <h1 className='mt-3 font-bold text-[1.4rem] mb-[2.8rem] text-white'>
                    Weekly excursions
                </h1>

                <p className='mb-[2.4rem] text-white' >
                    Lorem ipsum dolor sit amet consectetur illo praesentium porro explicabo earum ipsam quis tempora non tem
                </p>

                <a href="#" className='bg-white px-2 py-2 rounded-sm w-[8rem] text-center font-medium'> Learn more</a>


            </div>

            <div className='w-[30%] bg-blue-200 rounded-2xl py-5 px-[1.5rem] flex flex-col'
             style= {{
                background: `url(${bg4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}>
                <h1 className='mt-3 font-bold text-[1.4rem] mb-[2.8rem] text-white'>
                    Monthly public awareness
                </h1>

                <p className='mb-[2.4rem] text-white'>
                    Lorem ipsum dolor sit amet consectetur illo praesentium porro explicabo earum ipsam quis tempora non tem
                </p>

                <a href="#" className='bg-white px-2 py-2 rounded-sm w-[8rem] text-center font-medium'> Learn more</a>


            </div>



        </div>


    </div>
  )
}

export default Projects