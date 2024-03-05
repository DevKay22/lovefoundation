import React from 'react'

const KnowAbout = () => {
  return (
    <div className='container mx-[5rem]'>
        <div className=''>
            <h1 className='text-[1.0rem] font-medium mb-3'>
                KNOW ABOUT US
            </h1>

            <div className='flex '>
                <div className='w-[50%]'>
                    <h1 className='text-[2.3rem] px-3 font-bold'>
                        We are a non-governmental organization
                    </h1>
                </div>

                <div className='flex flex-col space-y-1 w-[30%]'>
                    <p className='font-medium'>
                        Consectetur adipisicing elit. 
                        Harum accusantium temporibus, pariatur officiis consequuntur
                         ipsa minima dolorem, cum.

                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aperiam laborum soluta vero sapiente illo eligendi. 
                        Maiores odio dignissimos aliquam atque vitae, unde cum, 
                        harum assumenda fugit porro fugiat. Aperiam, amet.
                    </p>

                </div>

            </div>

        </div>
    </div>
  )
}

export default KnowAbout