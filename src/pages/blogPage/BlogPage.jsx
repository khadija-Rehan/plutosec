import React, {useEffect, useState} from 'react'
import './BlogPage.css'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import Home from '../../asserts/contactbg.svg'
import Follow from '../../components/Follow us/Follow';

const BlogPage = () => {
    const {slug} = useParams();
    const [blog, setBlog] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(`https://plutosec.ca/backend/api/blog/view/${slug}`);
                setBlog(response.data.blog);
            }
            catch(err)
            {
                  console.error('Error fetching blog:', err);
            }
        };
        fetchData();
    }, [slug]);

     if (!blog) return <p>Loading blog...</p>;
    const baseurl = "https://plutosec.ca/backend/api/";
  return (
     <div className='blogAll'>
      <div className='blogpic'>
       <div className='overlay'><p><a href="">Home | Blogs | Pen test...</a></p></div> 
        {/* <p>{slug}</p> */}
      </div>
    <div className="blog-page">
      <h1 className='title'>{blog.title}</h1>
      <div className='dateSection'>
       <img src={baseurl+blog.thumbnail} alt="" />
        <div className='follow1'><Follow/></div>
      </div>
      <p  dangerouslySetInnerHTML={{ __html: blog.detail }} className='description'></p>
    </div>
    </div>
  );
};



export default BlogPage