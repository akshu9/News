import React from 'react'
import loading from './Spinner@1x-1.0s-200px-200px.gif'

function Spinner() {
  return (
    <div className='text-center'>
        <img src={loading} alt="Loading" />
    </div>
  )
}

export default Spinner