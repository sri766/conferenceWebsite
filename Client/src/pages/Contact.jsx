import React from 'react'
import { Card } from 'flowbite-react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='lg:mx-48 lg:ml-64 lg:mt-32 h-screen text-justify font-textFont'>
        <div className="mt-5  lg:flex  ">
          <Card className='lg:w-full mx-2 h-full'>
            <h5 className="mb-4 text-3xl font-semibold text-textmain dark:text-gray-400 self-center">
              Contact
            </h5>
            <div className="mx-auto flex gap-10">
              <p className='font-semibold text-lg mb-10 flex flex-col gap-2 justify-center align-items-center'>
                <span className='font-semibold text-xl'>Dr Dibya Prakash Jena</span>
                <span className='font-light text-md flex gap-2 justify-center align-items-center'>ID, Principal Coordinator</span>
                <span className='font-normal text-lg flex gap-2 justify-center align-items-center'><span className=''><FaPhoneAlt /></span>+91-9938084602</span>
                <span className='font-light text-md flex gap-2 justify-center align-items-center'><span className=''><MdOutlineMail /></span>jenad@nitrkl.ac.in</span>
              </p>
              <p className='font-semibold text-lg mb-10 flex flex-col gap-2 justify-center align-items-center'>
                <span className='font-semibold text-xl'>Dr Mohit Lal</span>
                <span className='font-light text-md flex gap-2 justify-center align-items-center'>ID, Convener</span>
                <span className='font-normal text-lg flex gap-2 justify-center align-items-center'><span className=''><FaPhoneAlt /></span>+91-7415189453</span>
                <span className='font-light text-md flex gap-2 justify-center align-items-center'><span className=''><MdOutlineMail /></span>lalm@nitrkl.ac.in</span>
              </p>
              <p className='font-semibold text-lg mb-10 flex flex-col gap-2 justify-center align-items-center'>
                <span className='font-semibold text-xl'>Dr. Ajit Behera</span>
                <span className='font-light text-md flex gap-2 justify-center align-items-center'>MM, Convener</span>
                <span className='font-normal text-lg flex gap-2 justify-center align-items-center'><span className=''><FaPhoneAlt /></span>+91-99383 83765</span>
                <span className='font-light text-md flex gap-2 justify-center align-items-center'><span className=''><MdOutlineMail /></span>beheraajit@nitrkl.ac.in</span>
              </p>
            </div>
          </Card>
        </div>
    </div>
        
  )
}

export default Contact
