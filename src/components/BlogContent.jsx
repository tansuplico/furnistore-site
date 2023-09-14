import React, { useState } from "react";

import sidebar from "../assets/navbar-img/sidebar.png";

import time from "../assets/navbar-img/blog-date.png";
import profile from "../assets/navbar-img/blog-prof.png";

import { BlogSidebar, BlogAsidebar } from "../components";

const BlogContent = () => {
  // Sidebar
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const blogContent = [
    {
      id: 1,
      title: "Quotes Wall Sticker & Decal",
      img: "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/460x300/uploaded_images/6-870x565.jpg?t=1541997765",
      author: "megantech",
      date: "30th Oct 2023",
    },
    {
      id: 2,
      title: "Landscap Wall Canvas",
      img: "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/460x300/uploaded_images/7-870x565.jpg?t=1541998070",
      author: "borntech",
      date: "27th Oct 2023",
    },
    {
      id: 3,
      title: "5 Pieces Canvas Combination Unframed",
      img: "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/460x300/uploaded_images/5-870x565.jpg?t=1541998402",
      author: "abovetech",
      date: "21st Oct 2023",
    },
    {
      id: 4,
      title: "Nursery wall decal",
      img: "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/460x300/uploaded_images/4-870x565.jpg?t=1541998456",
      author: "raventech",
      date: "3rd Oct 2023",
    },
  ];

  return (
    <>
      <BlogSidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        blogContent={blogContent}
      />
      {toggleSidebar && (
        <div
          className="w-full h-[100vh] fixed top-0 bg-black bg-opacity-[.7] z-30"
          onClick={() => setToggleSidebar(false)}
        ></div>
      )}
      <div className="w-full py-10 flex justify-center items-center">
        <div className="w-[90%] lg:w-[80%] flex justify-center items-start gap-8 ">
          <div className="md:w-full lg:w-[75%] flex flex-col justify-center items-start">
            <div
              className="w-max md:hidden p-2 mb-5 flex items-center bg-white border-solid border-2 border-gray-300 "
              onClick={() => setToggleSidebar(true)}
            >
              <img src={sidebar} alt="sidebar" className="w-[25px] h-[25px]" />
              <h1>SIDEBAR</h1>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
              {blogContent.map((data, i) => {
                return (
                  <div className="flex flex-col" key={i}>
                    <div className="w-full flex justify-center items-center">
                      <img src={data.img} alt={data.key} />
                    </div>

                    <div className="w-full mt-3">
                      <strong className="hover:text-[#00A693] cursor-pointer transition-all">
                        {data.title}
                      </strong>
                      <div className="mt-1 flex items-center gap-2 text-[#8F8F8F] text-[.8rem]">
                        <div className="flex justify-center items-center gap-2">
                          <img
                            src={profile}
                            alt="profile"
                            className="w-[15px] h-[15px]"
                          />
                          {data.author}
                        </div>

                        <div className="flex justify-center items-center gap-2">
                          <img
                            src={time}
                            alt="profile"
                            className="w-[15px] h-[15px]"
                          />
                          {data.date}
                        </div>
                      </div>
                      <p className="text-[.8rem] my-2 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Dolores obcaecati, impedit, sequi sapiente
                        consequuntur odio quaerat eligendi iure facere quibusdam
                        voluptatem est illum ab porro praesentium quidem eos
                        maxime natus?
                      </p>
                      <button className="hover:px-3 py-1 hover:bg-[#00A693] hover:text-white transition-all">
                        Read More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <BlogAsidebar blogContent={blogContent} />
        </div>
      </div>
    </>
  );
};

export default BlogContent;
