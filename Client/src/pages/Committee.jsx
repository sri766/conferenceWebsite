import React from 'react'
import { Card } from 'flowbite-react'
const Committee = (props) => {
  return (
    <div className='lg:mx-48 lg:ml-64 lg:mt-32 text-justify font-textFont'>
        <div className="mt-5  lg:flex  ">
          <Card className='lg:w-full mx-2 h-full'>
            <h5 className="mb-4 text-3xl font-semibold text-textmain dark:text-gray-400 self-center">
              Organizing Committee
            </h5>
            <div className="mx-auto">
              <p className='font-semibold text-lg mb-10 flex flex-col gap-2 justify-center align-items-center'>
                <span className='font-semibold text-xl underline'>PATRON</span>
                <span className='font-normal text-lg'>K Umamaheswar Rao</span>
                <span className='font-light text-md'> Director, NIT Rourkela</span>
              </p>


              <div className="flex mb-4 flex-col justify-center align-items-center">
                <div className="title my-2 mx-auto">
                  <span className='font-semibold text-xl underline'>General Chairs</span>
                </div>
                <div className="flex flex-col justify-center align-items-center">
                  <p className='font-semibold text-lg mb-2.5 flex gap-2'>
                    <span className='font-normal text-lg'>Prof. P. Chandramouli</span>
                    <span className='font-light text-md'>IIT Madras</span>
                  </p>
                  <p className='font-semibold text-lg mb-2.5 flex gap-2'>
                    <span className='font-normal text-lg'>Dr. D.D Ebenezer</span>
                    <span className='font-light text-md'>Retd. Sc.-H, NPOL</span>
                  </p>
                  <p className='font-semibold text-lg mb-2.5 flex gap-2'>
                    <span className='font-normal text-lg'>Prof. S.K. Dwivedy</span>
                    <span className='font-light text-md'>IIT Guwahati</span>
                  </p>
              </div>
              </div>

              <p className='font-semibold text-lg mb-10 flex flex-col justify-center align-items-center '>
                <span className='font-semibold text-xl underline my-2'>Organizing Secretary</span>
                <span className='font-normal text-lg'>Prof. Mohit Lal (ID)</span>
                <span className='font-light text-md'>NIT Rourkela</span>
              </p>
            </div>
          </Card>
        </div>
    </div>
  )
}

export default Committee