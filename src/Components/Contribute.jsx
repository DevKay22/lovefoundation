import React from 'react';
import bg4 from '../assets/Images/blog59.jpg'

const Contribute = () => {
  return (
    <div className='container  rounded-md mx-auto my-[5rem] w-4/5 h-[20rem] text-center py-[4.0rem]'
    style= {{
        background: `url(${bg4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <h1 className='text-[2.1em] font-bold text-white'>
            You can contribute to provide a space <br />for children with special needs!
        </h1>

        <div className='flex space-x-4 justify-center items-center mt-[3rem]'>
            <button className='bg-yellow-400 font-bold py-2 px-4 rounded-sm'>
                Join as a volunteer
            </button>

            <button className='bg-white font-bold py-2 px-4 rounded-sm'>
                Donate
            </button>

        </div>

        

    </div>
  )
}

export default Contribute