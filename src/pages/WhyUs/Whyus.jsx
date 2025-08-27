import React from 'react'
import './Whyus.css'
import BreadCrum from '../../components/Bread Crum/BreadCrum'
import headingimg from '../../asserts/headingimg.svg'
import Values from '../Values/Values'
import Mission from '../../components/mission/Mission'
import Blogs from '../../components/blogs/Blogs'
import BlogData from '../../components/Blog data/BlogData'


// import img1 from '../../asserts/image2.jpg'
// import img2 from '../../asserts/image3.jpg'
// import img3 from '../../asserts/image4.jpg'
// import img4 from '../../asserts/image5.jpg'

const Whyus = () => {
  return (
    <div>
   {/* <div className='WhyUs'>
        <div className='overlay0'>
            <p>Home|Why us..</p>
            </div>
        </div> */}
        <BreadCrum title={"Why us.."}/>
         <div className='Whead'>
                <p>Why Choose Us</p>
                <p>Cyber threats grow fast, but we stay faster. Plutosec is a trusted name in cybersecurity. We protect your data using smart tools and expert support. You get fast detection and strong response against threats. Our team handles identity access and keeps your cloud safe. We follow all rules and help you stay compliant. Plutosec stays ahead to keep you secure. You can focus on your goals without worry.</p></div>

                <div className='frontWhy'>
                <div className='leftsec'>
                    <p className='head'>Who we are?<img src={headingimg} alt="" /></p>
                    <p className='para'>We are cybersecurity professionals who defend your data. Our team works with purpose and speed. You get smart support from people who understand threats.</p>
                   <p className='para'> We believe strong security should be simple. That’s why we build tools that solve problems fast. You don’t have time to guess. We give you clear answers.</p>
                   <p className='para'> Every company needs protection. No matter the size, we help you stay safe. You focus on your work. We handle the rest.</p>
                   <p className='para'> Plutosec stands for trust. We work hard so you don’t have to worry. You stay one step ahead because we never fall behind.</p>
                    </div>

                <div className='rightsec'>
                    <div className='rightL'>

                    <div className='rightTop'>
                    <div className='rightTopL'>
                     
                    </div>
                     <div className='rightTopR'>
                     
                     </div>
                    </div>
                    <div className='rightBottom'>
                    
                    </div>

                    </div>
                    <div className='rightR'>
                    </div>
                </div>
                    </div>

                    <Values/>
                    <Mission/>
                    <Blogs/>
                    <BlogData/>
            </div>

       
  )
}

export default Whyus