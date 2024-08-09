import React from 'react'

const CountCard = ({ label, count}) => {
  return (
    <div className='shadow-lg min-h-[8vh] min-w-[10vw] py-2 rounded-md'>
      <div className='flex flex-col'>
        <p>{label}</p>
        <p className=' text-2xl font-extrabold text-blue-600'>{count}</p>
      </div>
    </div>
  )
}

export default CountCard