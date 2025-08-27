
import React, { useEffect, useState } from 'react';
import './Service.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { getAllServices } from '../../DAL/fetch';
import { baseUrl } from '../../config/Config';
const Service = () => {
  const Navigate=useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const currentCategory = categories[activeIndex] || { data: [] };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllServices();
        setCategories(response.services);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
      
    };  

    fetchData();
  }, []);

  return (
    <div className='ServiceBackground'>
    <div className="service-container">
      <div className="left-category-box">
        {categories.map((item, index) => (
          <div
            className="category-entry"
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <img
              src = {baseUrl + item.icon}
              alt="category icon"
            />
            <h3>{item.heading}</h3>
          </div>
        ))}
      </div>

      <div className="right-category-box">
        {currentCategory.data.map((service, i) => (
          <div className="service-details" key={i}>
            <div className='service-data'> 
            <div className="service-title" onClick={() =>Navigate(`/titleS/${service.slug}`) }>{service.title}</div>
            {/* <div className="service-slug">{service.slug}</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Service;
