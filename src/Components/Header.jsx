import React from 'react'

const Header = () => {
  return (
    <div className='container'>
       <section className='flex justify-around items-center mt-[1rem] mb-[1rem]'>
        <div>
            <h1 className='font-bold text-[1.6rem]'>lovefoundation<i>l</i></h1>

        </div>

        <div className='w-2/5'>
            <ul className='flex justify-between'>
                <li>Home</li>
                <li>About us</li>
                <li>Media</li>
                <li>What we do</li>
                <li>Contact</li>
            </ul>

        </div>

        <div>
            <a href="#" className='px-4 bg-black text-white py-3 rounded-md'>Donate</a>
        </div>

       
       </section>

       <div className="border-t border-b-1 border-black w-80% font-bold my-4"></div>

    </div>
  )
}

export default Header