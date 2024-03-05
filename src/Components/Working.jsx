import React from 'react';
import hero from '../assets/Images/hero2.png'

const Working = () => {
  return (
    <div className='container flex w-[80%] mx-auto my-[4rem] justify-between'>
        <div className='w-[45%] flex flex-col space-y-6 my-auto'>
            <h2 className='text-[1.0rem] font-bold'>
                WHAT WE DO
            </h2>

            <h1 className='text-[2.9rem] font-bold leading-[2.96rem]'>
                We are working cross country
            </h1>

            <p className='text-[0.9rem] font-thin'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Excepturi culpa odit harum numquam asperiores quos sint minus 
                voluptate vero omnis eaque doloremque tempore velit assumenda, 
                
                 eaque rerum, dignissimos minima accusantium quasi nisi tempore a minus
                  maiores quam voluptate temporibus expedita provident! Facilis, 
                deleniti officiis laudantium voluptate culpa rerum. Id.
            </p>

        </div>

        <div className='w-[45%]'>
            <img src={hero} alt=""  className=''/>

        </div>

    </div>
  )
}

export default Working