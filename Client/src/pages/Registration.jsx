// import { Table } from 'flowbite-react'
import {React,useRef} from 'react'
import TableMain from '../Components/TableMain'
import TableSub from '../Components/TableSub'
import BankDetails from '../Components/BankDetails'
import FormComponent from '../Components/FormComponent'
import {noteData} from '../data/data'
import SubmissionForm from '../Components/SubmissionForm'



const Registration = (props) => {
  const paymentSection = useRef(null);
  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: paymentSection.current.offsetTop,
      behavior: 'smooth'
    }); 
  }; 



  return (
    <div className="lg:mx-48 lg:ml-1/2 mt-20 sm:mx-2 bg-bgblue text-justify font-textFont">
       <div className='flex justify-center align-middle '>
        <button
          type="submit"
          onClick={scrollToBottom}
          className=" my-8 rounded-xl drop-shadow-xl  bg-textmain font-textFont text-white ring-2 ring-textmain  px-5 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        >Click To Complete Your Registration
        </button>
      </div>

      <div className='text-4xl flex justify-center text-textmain py-4 font-semibold'>
        Registration Details
      </div>

        <div className='lg:flex lg:flex-row gap-10 sm:flex sm:flex-col '>
          <TableMain />
          <TableSub />
        </div>
        

     

        {/* Note component */}
        <div className="shadow drop-shadow-sm bg-white p-8 mt-16 text-justify">
          <h2 className='text-4xl text-textmain font-semibold lg:mb-4 self-center text-center'>NOTE<br/></h2>
          <div className="">
          {noteData.map((currNote)=>
            <span className='text-lg p-4 flex '>
            {currNote}
            <br/>
          </span>
          )}
          </div>
        </div>
        <div className="" >
          <BankDetails/>
        </div>
        <div className="" ref={paymentSection}>
          
        </div>
        <div className='   bg-bgblue  rounded-lg' >
          <FormComponent/>
        </div>
        
        
    </div>
  )
}

export default Registration