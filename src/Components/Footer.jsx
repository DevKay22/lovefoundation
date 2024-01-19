import React from 'react';
import { GiSelfLove } from "react-icons/gi";

const Footer = () => {
  return (
    <div className='container bg-black text-white py-[4em] px-[8rem]'>
         <div className=' flex'>
            <div className='w-3/5 flex space-x-[3rem] '>
                <div className='flex space-x-1 '>
                <h1 className='font-medium text-[1.3rem] '>lovefoundation</h1>
                <span className='font-medium text-[1.3rem]'><GiSelfLove /></span>

                 </div>

                <div className='flex space-x-[5.0em] text-[0.8em]'>
                <ul className='space-y-5 font-thin'>
                    <li className='font-bold'>Home </li>
                    <li>About us</li>
                    <li>Media</li>
                    <li>What we do</li>
                    <li>Contact</li>
                </ul>

                <ul className='space-y-5 font-thin'>
                    <li className='font-bold'>More </li>
                    <li>Projects</li>
                    <li>Events</li>
                    <li>Donate</li>
                    <li>Blog</li>
                </ul>

                <ul className='space-y-5 font-thin'>
                    <li className='font-bold'>Connect </li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                </ul>



                
            </div>

        </div>

        <div className='w-2/5'>
            <h1 className='font-bold text-[1.8em]'>
                Subscribe to get latest updates
            </h1>

            <div>
                <input type="text" placeholder='Your email' className='py-3 px-[2.0em] mt-[2.5em]
                 bg-black  border-[0.5px] border-gray-500 rounded-tl-md rounded-bl-md w-[19em]' />

                 {/* button */}
                 <button className='bg-white text-[0.8rem] text-black py-3 pt-4 px-3 border-[0.5px] rounded-br-md rounded-tr-md font-medium'>Subscribe</button>
            </div>

        </div>

    </div>
    </div>
   
  )
}

export default Footer