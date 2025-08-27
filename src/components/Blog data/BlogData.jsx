import React, { useEffect, useState } from 'react'
import './BlogData.css'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import { getAllBlogs } from '../../DAL/fetch';
const BlogData = () => {
    const navigate= useNavigate();
    // const bloges=[
    //     {
    //     date: "31",
    //     month: "JUL",
    //     tittle: "What is the Dark Web? How it works and Why Its Not All Illegal",
    //     description: "AWS GuardDuty scans your cloud environment for threats. It uses logs from AWS tools to catch unusual activity.",
    //     buttonText: "Cyber Security"
    //     },
    //      {
    //     date: "30",
    //     month: "JUL",
    //     tittle: "What is perfect Data Software?AI Tools for smarter Data Cleaning",
    //     description: "SCADA Security & Penetration Testing Services for Industrial Systems",
    //     buttonText: "SCADA Security & Penetration"
    //     },
    //      {
    //     date: "29",
    //     month: "JUL",
    //     tittle: "The illusion of Saftey:Unpacking the Risks of Security Through Obscurity",
    //     description: "Cyber attacks can hit your systems without notice. They can steal data, cause loss, and hurt your reputation.",
    //     buttonText: "Management Services"
    //     },

    // ]
    //API
    const[activeIndex, setActiveIndex] = useState(0);
    const[bloges, setBlogData] = useState([]);
    const currentdata = bloges[activeIndex] || {data: []};

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await getAllBlogs();
                setBlogData(response.blogs);
            }
            catch(err)
            {
                   console.error('Error fetching Blogs:', err);
                }
        };
        fetchData();
    }, []);

    const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  return { day, month };
};


  return (
    <div className='area9-blogs'>
        {bloges.map((item, index) => {
             const { day, month } = formatDate(item.createdAt);
             return(
        <div className='blog1' key={index} onClick={() => navigate(`/blog/${item.slug}`)}>
            <div className='dataBlog'>
                <p className='date' >{day}</p>
                <p className='month' >{month}</p>
            </div>

            <div className='vertical-line'></div>
            <div className='dataBlog1'>
                <p className='tittle'> {item.title}</p>
                <p className='description'> {item.description}</p>
                <p className='button2'> {item.category.name}</p>
            </div>
        </div>
             );
})}
    </div>
  );
};

export default BlogData