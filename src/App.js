import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import BlogPage from './pages/blogPage/BlogPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import IndustryP from './pages/Industry page/IndustryP'
import Service from './components/service Category/Service'
import Whyus from './pages/WhyUs/Whyus'
import Careers from './pages/Careers/Careers'
import ContactP from './pages/Contact Page/ContactP'
import ServiceTitle from './pages/Service-title/ServiceTitle'

const App = () => {
     const [servicesVisible, setServicesVisible] = useState(false);
      
     const togglePopup =()=>{
      setServicesVisible((prev) => !prev);
     }

  return (
   <BrowserRouter>
   <Header Servicebtn={togglePopup}/>
     <div className='content-area'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path ='/blog/:slug' element={<BlogPage/>}/>
    <Route path = '/Industry' element={<IndustryP/>}/>
    <Route path = '/Whyus' element={<Whyus/>}/>
    <Route path = '/Careers' element={<Careers/>}/>
    <Route path = '/ContactP' element={<ContactP/>}/>
    <Route path = '/titleS/:slug' element={<ServiceTitle/>}/>
   </Routes>
   </div>
    { servicesVisible && (<Service/>)}
   <Footer/>
   </BrowserRouter>
  )
}

export default App
