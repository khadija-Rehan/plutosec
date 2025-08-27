import React from 'react'
import './BreadCrum.css'
const BreadCrum = ({title}) => {

  return (
     <div className='BreadCrum'>
        <div className='overlay0'>
            <p>Home|{title}</p>
            </div>
        </div>
  )
}

export default BreadCrum