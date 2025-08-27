import React from 'react'
import './Industry.css'
import Test from '../../components/Testimonials/Test'
import Cardtest from '../../components/Testimonial Text/Cardtest'
import Blogs from '../../components/blogs/Blogs'
import BlogData from '../../components/Blog data/BlogData'
import BreadCrum from '../../components/Bread Crum/BreadCrum'
const IndustryP = () => {
    const Icards=[
        {
            name:"Retail & Ecommerce"
        },
        {
            name:"Finance"
        },
        {
            name: "Government"
        },
        {
            name:  "Education"
        },
        {
            name: "Technology"
        },
        {
            name: "Health Care"
        },
        {
            name: "Utilities & Energy"
        },
        {
            name: "Oil & Gas"
        },
        {
            name: "Banking"
        },
    ]
  return (
    <div>
    {/* <div className='indus'>
        <div className='over-lay'>
            <p>Home|Industry..</p>
            </div>
            </div> */}
            <BreadCrum title={"Industry.."}/>

            <div className='IHead'>
                <p>Industries</p>
                <p>Our clients trust Plutosec to secure their businesses. Discover their experiences and learn how we’ve helped strengthen their security. We value each testimonial and use the insights to continually improve our services.</p></div>

                <div className='cardsIndus'>
                   {Icards.map((card, index) => (
                    <div className='industry-card' key={index}>
                        <p className='cardName'>{card.name}</p>
                    </div>
                   ))}
                </div>
                <Test/>
                <Cardtest/>
                <Blogs/>
                <BlogData/>

            </div>
        
  )
}

export default IndustryP