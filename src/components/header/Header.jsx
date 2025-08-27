import React, { useState } from "react";
import img1 from '../../asserts/plutosec.png'
import { IoGlobeOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import {Navigate, useNavigate} from 'react-router-dom'
import './Header.css'

const Header=({Servicebtn})=>{
    const navigate=useNavigate();
    const [showMenu,setShowMenu] = useState(false);
    return(
        <> 
          <div className="header">
        <div className="header-left">
           <img src={img1} alt="" onClick={() => navigate('/')}/>
        </div>
     
        <div className="header-center">
            <div className="center">
                <ul>
                    <li className="active" onMouseEnter={Servicebtn}>
                        Services
                    </li>

                <li onClick={() => navigate('/Industry')}>
                        Industries
                    </li>

                    <li onClick={() => navigate('/whyus')}>
                        Why Us
                    </li>

                    <li onClick={() => navigate('/Careers')}>
                        Careers
                    </li>

                    <li onClick={() => navigate('/ContactP')}>
                        Contact Us
                    </li>
                </ul>
            </div>
        </div>
   <div className="menu0" onClick={() => setShowMenu(!showMenu)}><IoMenu /></div> 
   
      
        <div className="header-right">
               
            <div className="right">
     <div className="menu"><IoGlobeOutline/></div>
                <select className="English">
                    <option>English</option>
                </select>
            </div>
          
        </div>
        
    </div>
 { showMenu && 
        <div className="popup0">
            <ul className="items0">
                <li>Service</li>
                <li onClick={() => {navigate ('/Industry');
                    setShowMenu(!showMenu);
                }}>Industries</li>
                <li onClick={() => {navigate ('/whyus'); setShowMenu(!showMenu);}}>Why Us</li>
                <li onClick={() => {navigate ('/Careers'); setShowMenu(!showMenu);}}>Careers</li>
                <li onClick={() => {navigate('/ContactP');   setShowMenu(!showMenu);}}>Contact Us</li>
            </ul>
        </div>}
     </>
    );
}

export default Header;
