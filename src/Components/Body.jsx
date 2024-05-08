import React from 'react'

const Body = (props) => {
  return (
    <div className='bg-white p-4 drop-shadow-xl font-textFont'>
        <h3 className='text-3xl flex font-semibold justify-center'>{props.about.title}</h3>
        <p className=' p-4 text-lg'>{props.about.content}</p>
    </div>
  )
}

export default Body