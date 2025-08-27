import React from 'react'
import './Blogs.css'
import headingimg3 from '../../asserts/headingimg.svg'
import { FaArrowRightLong } from "react-icons/fa6";

const Blogs = () => {
  return (
     <div class="area8-blogs">
        <div class="blog-left">
            <div class="headingimg">
                <p>Latest Blogs</p><img src={headingimg3} alt=""/>
</div>
        </div>

        <div class="blog-right">
            <p>View All  <FaArrowRightLong/></p>
        </div>
    </div>
    
    
  )
}

export default Blogs