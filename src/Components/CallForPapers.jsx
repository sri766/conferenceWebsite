import React from 'react'

const CallForPapers = (props) => {
  return (
    <div className='bg-white p-4 drop-shadow-xl font-textFont'>
        <h3 className='text-3xl flex justify-center font-semibold'>{props.Details.title}</h3>
        <p className='p-4 text-lg'>{props.Details.content}</p>
    </div>
  )
}

export default CallForPapers
