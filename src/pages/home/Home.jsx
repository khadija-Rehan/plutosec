
import Header from '../../components/header/Header';
import Industry from '../../components/Industry Leading/Industry';
import Cybersecurity from '../../components/Cybersecurity Services/Cybersecurity';
import Cards from '../../components/Cards/Cards';
import Certification from '../../components/certifications/Certification';
import Service from '../../components/service Category/Service';
import { useState } from 'react';
import Why from '../../components/why us/Why';
import Blogs from '../../components/blogs/Blogs';
import BlogData from '../../components/Blog data/BlogData';
import Test from '../../components/Testimonials/Test';
import Cardtest from '../../components/Testimonial Text/Cardtest';
import Valuable from '../../components/valuable/Valuable';
import Clients from '../../components/Clients/Clients';
import Contact from '../../components/Contact us/Contact';
import Footer from '../../components/footer/Footer';


function Home() {
  //  const [servicesVisible, setServicesVisible] = useState(false);
    
  //  const togglePopup =()=>{
  //   setServicesVisible((prev) => !prev);
  //  }
   

  return (
    <div className="App">
    {/* <Header Servicebtn={togglePopup}/> */}
    <Industry/>
    <Cybersecurity/>
    <Cards/>
    <Certification/>  
    <Why/>
    <Blogs/>
    <BlogData/>
    <Test/>
    <Cardtest/>
    <Valuable/>
    <Clients/>
    <Contact/>
    {/* { servicesVisible && (<Service/>)} */}
    </div>
  );
};
export default Home;
