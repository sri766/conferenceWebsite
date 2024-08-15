import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {

  return (
    <div className='bg-white w-full ' id="sidebar">
        <ul className='w-full flex justify-around flex-row p-1 font-textFont'>
        <NavLink
        
         to='/' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 3em 0.05em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"5rem", display:'flex', justifyContent:'center',alignItems:'center'} : {})} 
                        className='nav-link'>
          Home 
        </NavLink> 

        <NavLink to='/registration' style={({ isActive }) => 
                          (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"5rem", display:'flex', justifyContent:'center',alignItems:'center'} : {})} activeClassName='selected'
            className={
        ( "nav-link")
        }
            
            >
          Registration
        </NavLink>
      
      <NavLink to='/submission' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"5rem", display:'flex', justifyContent:'center',alignItems:'center'} 
                      : {})}   
                      className='nav-link '>
         Submission
        </NavLink>
      

      <NavLink to='/guidelines' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"5rem", display:'flex', justifyContent:'center',alignItems:'center'} 
                      : {})}   
                      className='nav-link'>
         Author  Guidelines
        </NavLink>
        

        <NavLink to='/committee' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"5rem", display:'flex', justifyContent:'center',alignItems:'center'} : {})}  
                      className='nav-link'>
        Committee

      </NavLink>

       
        <NavLink to='/venue' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"5rem", display:'flex', justifyContent:'center',alignItems:'center'} : {})} activeClassName='selected'
         className={
     ( "nav-link")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Venue & Accommodation
        </NavLink>

        <NavLink to='/contact' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#6C0345", color:"white", borderRadius:"5rem", display:'flex', justifyContent:'center',alignItems:'center'} : {})} activeClassName='selected'
         className={
     ( "nav-link")
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