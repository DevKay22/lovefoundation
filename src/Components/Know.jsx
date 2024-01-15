import React from 'react';
import  vid from '../assets/Images/video.png'

const Know = () => {
  return (
    <div className='container flex ml-[4rem]  justify-around'>
        <div className='flex flex-col w-2/5  space-y-4 mt-[2rem]'>

            <h1 className='pt-4 font-bold '>
                KNOW ABOUT US
            </h1>

            <h1 className='font-bold text-[2.2rem]'>
                We provide a place for children with special needs
            </h1>

            <p className='font-thin '> Nihil repellat, neque porro tempora adipisci aspernatur reiciendis eveniet! Harum, veritatis?</p>

            <p className='font-thin mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corrupti alias aperiam ipsa eum reprehenderit perspiciatis, iusto esse fugit tempore molestiae eveniet aut quas quibusdam ratione quia exercitationem tempora veritatis!
            </p>

            

            <a href="#" className=' py-1 bg-yellow-400 w-[7rem] text-center rounded-sm font-medium'>Learn more</a>

        </div>

        <div className=' w-1/5 mx-auto '>
            <img src={vid} alt="" className='h-[30rem] w-[22rem]' />
        </div>
        
    </div>
  )
}

export default Know