import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {

  return (
    <div className='bg-white w-full ' id="sidebar">
        <ul className='w-full flex justify-around flex-row my-2 p-1 font-textFont'>
        <NavLink
        
         to='/' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 3em  0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})} 
                        className='hover:drop-shadow-lg hover:bg-gray-200 hover:rounded-lg my-2 lg:text-lg  hover:no-underline  text-textmain hover:text-textmain'>
          Home 
        </NavLink>

        {/* <a
        href="https://ipdims.in/submission/"
        // active={true}
        className='hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 hover:p-1 lg:text-lg hover:no-underline  text-textmain hover:text-textmain '
      >
        Submission
      </a> */}

        <NavLink to='/registration' style={({ isActive }) => 
                          (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})} activeClassName='selected'
            className={
        ( "hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 hover:p-1 rounded-full  lg:text-lg hover:no-underline text-textmain hover:text-textmain")
        }
            
            >
          Registration
        </NavLink>
      
      <NavLink to='/submission' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} 
                      : {})}   
                      className='hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 lg:text-lg  hover:no-underline  text-textmain hover:text-textmain'>
         Submission
        </NavLink>
      

      <NavLink to='/guidelines' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} 
                      : {})}   
                      className='hover:rounded-lg hover:drop-shadow-lg hover:p-1 hover:bg-gray-200 my-2 lg:text-lg  hover:no-underline  text-textmain hover:text-textmain'>
         Author  Guidelines
        </NavLink>
        

        <NavLink to='/committee' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})}  
                      className='hover:rounded-lg hover:drop-shadow-lg hover:p-1 hover:bg-gray-200 my-2 lg:text-lg hover:no-underline  text-textmain hover:text-textmain  '>
        Committee

      </NavLink>

       

     

        

        <NavLink to='/venue' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})} activeClassName='selected'
         className={
     ( "hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 hover:p-1 rounded-full  lg:text-lg hover:no-underline text-textmain hover:text-textmain")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Venue & Accommodation
        </NavLink>

        <NavLink to='/contact' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})} activeClassName='selected'
         className={
     ( "hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 hover:p-1 rounded-full  lg:text-lg hover:no-underline text-textmain hover:text-textmain")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Contact Us
        </NavLink>


        </ul>
    </div>
  )
}

export default Sidebar