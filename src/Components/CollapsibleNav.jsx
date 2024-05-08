import React, {useState} from 'react'
import {Navbar} from "flowbite-react"
import { NavLink } from 'react-router-dom'
import nitrLogo from '../resources/nitrLogo.png'

const CollapsibleNav = ({isScrolled}) => {


  console.log(isScrolled);
  // const styleNav = isScrolled =="true"
  //   ? "sticky top-0 z-50 shadow drop-shadow-xs hidden"
  //   : "sticky top-0 z-50 shadow drop-shadow-xs";

    

  return (
    <div className={`transition-all duration-300 ease-in-out ${isScrolled ? "top-0 z-50 shadow drop-shadow-xs hidden" : "sticky top-0 z-50 shadow drop-shadow-xs"}`}>

    <Navbar
    rounded={true}
    className=''
    >
  
    
  <div className="lg:flex lg:justify-around lg:align-middle font-textFont">
       <img
        src={nitrLogo}
        className="ml-8 h-16 lg:h-24 lg:block hidden"
        alt="Flowbite Logo"
        />
      <span className="self-center whitespace-nowrap text-5xl font-semibold  text-textmain hover:no-underline"></span>
      <NavLink to='/'  className='lg:py-2 lg:hidden    lg:text-5xl  hover:no-underline text-textmain hover:text-textmain font-bold '>
        DS-NVC
       </NavLink>
       <NavLink to='/'  className='ml-2 lg:py-2 lg:block hidden  lg:text-3xl  hover:no-underline text-textmain hover:text-textmain font-semibold mt-4'>
        National Conference on Design Strategies for Noise and Vibration Control <span className='block text-center mt-2 text-xl break-words'>(DS-NVC 2024), NIT Rourkela, India</span>
       </NavLink>
    </div>  

    <div className="flex md:order-2  md:mr-2 lg:ml-16 ">
      <Navbar.Toggle />
    </div>



    <Navbar.Collapse>
      
      <NavLink to='/' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})}   className='lg:hidden lg:text-lg  hover:no-underline  text-textmain hover:text-textmain'>
      Home
        </NavLink>
      
         
      <a
        href="https://ipdims.in/submission/"
        // active={true}
         className={
     ( "lg:hidden rounded-full  lg:text-lg hover:no-underline text-textmain hover:text-textmain")
  }
      >
        Submission
      </a>
        
        <NavLink to='/guidelines' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})}   className='lg:hidden lg:text-lg  hover:no-underline  text-textmain hover:text-textmain'>
         Author Guidelines
        </NavLink>

        <NavLink to='/committee' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})}  className='lg:hidden lg:text-lg hover:no-underline  text-textmain hover:text-textmain  '>
        Committee

      </NavLink>


        <NavLink to='/registration' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})} activeClassName='selected'
         className={
     ( "lg:hidden rounded-full  lg:text-lg hover:no-underline text-textmain hover:text-textmain")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Registration
        </NavLink>
        <NavLink to='/venue' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})} activeClassName='selected'
         className={
     ( "lg:hidden rounded-full  lg:text-lg hover:no-underline text-textmain hover:text-textmain")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Venue & Accommodation
        </NavLink>
      <NavLink to='/contact' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"1em"} : {})} activeClassName='selected'
         className={
     ( "lg:hidden rounded-full  lg:text-lg hover:no-underline text-textmain hover:text-textmain")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Contact Us
        </NavLink>

    </Navbar.Collapse>
    
  </Navbar>
  </div>
  )
}

export default CollapsibleNav