import React from 'react'
import './Test.css'
import { FaArrowRightLong } from "react-icons/fa6";
import headingimg from '../../asserts/headingimg.svg'
const Test = () => {
  return (
  
          <div class="area8-blogs">
        <div class="blog-left">
            <div class="headingimg">
                <p>Testimonials </p><img src={headingimg} alt=""/>
            </div>
        </div>

        <div class="blog-right">
            <p>View All  <FaArrowRightLong/></p>
        </div>
    
    </div>
  )
}

export default Test