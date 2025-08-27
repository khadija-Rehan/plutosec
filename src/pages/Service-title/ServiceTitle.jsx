import React, { useEffect, useState } from "react";
import "./ServiceTitle.css";
import headingimg from "../../asserts/headingimg.svg";
import keyofferings from "../../asserts/keyofferings.jpg";
import storyimg from '../../asserts/storiesbg.jpg'
import BreadCrum from "../../components/Bread Crum/BreadCrum";
import { useParams } from "react-router-dom";
import axios from "axios";
import Test from "../../components/Testimonials/Test";
import Cardtest from "../../components/Testimonial Text/Cardtest";
import Blogs from "../../components/blogs/Blogs";
import BlogData from "../../components/Blog data/BlogData";
import { getServicesTitle } from "../../DAL/fetch";
const ServiceTitle = () => {
  const { slug } = useParams();
  const [title, setTitle] = useState({});
  //onclick
  const [index, setIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getServicesTitle(slug);
        // const response = await axios.get(
        //   `https://plutosec.ca/backend/api/service/view/${slug}`
        // );

        setTitle(response.service);
      } catch (error) {
        console.error("Error Fetching services:", error);
      }
    };
    fetchData();
  }, [slug]);
  return (
    <div>
      <BreadCrum title={`Services | ${slug}...`} />
      {/* <div><p>{title?.name}</p></div> */}

      <div className="ser-Title">{title.title}</div>
      <div className="ser-desc">{title.description}</div>
      <div className="key">
        <p>
          Key Offerings <img src={headingimg} alt="" />
        </p>
      </div>
      <div className="points">
        {title.offerings?.map((data, cat) => (
          <p
            className={`points-title ${cat === index ? "active" : ""}`} key={cat} onClick={() => setIndex(cat)}> {data.name}{" "}
          </p>
        ))}
      </div>
      <div className="point-index">
        {title.offerings && (
          <div className="point-L">
            {title.offerings[index].items?.map((pointy) => (
              <ul>
                <li>
                  <p className="pointOfferings">{pointy} </p>
                </li>
              </ul>
            ))}
          </div>
        )}
        <div className="ponit-R">
          <img src={keyofferings} alt="" />
        </div>
      </div>

      <div className="Success-Story">
        <p>
          Success Stories <img src={headingimg} alt="" />
        </p>
      </div>
      <div className="Story">
        <div className="Story-L">
          {title.successstories?.map((Sdata, cat0) => (
            <p
              className="stories-title"
              key={cat0}
              onClick={() => setStoryIndex(cat0)}
            >
              {" "}
              {Sdata.name}
            </p>
          ))}
        </div>

        <div className="Story-R">
          {title.successstories && (
            <div className="StoryR">
                  {title.successstories[storyIndex].items?.map((storypoint) => (
                     <ul>
                <li>
                    <p className="storypoints">{storypoint}</p>
                </li>
              </ul>
                    ))}
                </div>
          )}

        </div>
      </div>
         
    <Test/>
    <Cardtest/>
    <Blogs/>
    <BlogData/>

    </div>
  );
};

export default ServiceTitle;
