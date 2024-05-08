import React from 'react'

const host = (props) => {
  return (
    <div className='bg-white p-4 drop-shadow-xl font-textFont'>
        <h3 className='text-3xl flex justify-center font-semibold'>{props.aboutNIT.title}</h3>
        <p className='p-4 text-lg'>{props.aboutNIT.content}</p>
    </div>
  )
}

export default host