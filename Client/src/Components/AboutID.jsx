import React from 'react'

const AboutID = (props) => {
  return (
    <div className='bg-white p-4 drop-shadow-xl font-textFont'>
        <h3 className='text-3xl flex justify-center font-semibold'>{props.aboutId.title}</h3>
        <p className='p-4 text-lg'>{props.aboutId.content}</p>
    </div>
  )
}

export default AboutID
