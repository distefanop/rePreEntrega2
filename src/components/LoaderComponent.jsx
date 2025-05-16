import '../styles/LoaderComponent.css'
import React from 'react'
import {PulseLoader} from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div className='loader'>
        <PulseLoader color='#BD1E7A'/>
    </div>
  )
}

export default LoaderComponent