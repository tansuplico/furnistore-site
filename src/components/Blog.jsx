import React from "react";

const Blog = () => {
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div className="w-[75%] flex flex-col justify-center items-center ">
        <h1 className="text-[1.4rem] mb-10 border-solid border-y-2 border-black">
          <strong className="text-[#00A693]"> LATEST </strong> BLOG
        </h1>

        <div className="w-full grid justify-center items-center grid-cols-1 grid-rows-1 lg:grid-cols-4 lg:grid-rows-2  ">
          <div className="w-full h-full flex relative hover:opacity-[.75] transition order-1">
            <div className="absolute left-5 p-2 bg-[#111111] flex text-center text-white opacity-1 ">
              <strong>
                30 <br /> OCT
              </strong>
            </div>
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/450x292/uploaded_images/6-870x565.jpg?t=1541997765"
              alt="blog-1"
              className="w-full h-full"
            />
          </div>
          <div className="w-full p-3 col-span-1 order-2 ">
            <strong className="text-[.9rem]">
              Quotes Wall Sticker and Decal
            </strong>
            <p className="text-[.75rem] my-2">
              Commodo laoreet semper tincidunt lorem Vestibulum nunc at In
              Curabitur magna. Euismod euismod Suspendisse tortor ante
              adipiscing risus Aenean Lorem vitae id.
            </p>
            <button className="text-[.9rem] hover:p-2 hover:bg-[#00A693] hover:text-white transition-all">
              Read More
            </button>
          </div>
          <div className="w-full h-full relative hover:opacity-[.75] transition order-3">
            <div className="absolute left-5 p-2 bg-[#111111] flex text-center text-white">
              <strong>
                30 <br /> OCT
              </strong>
            </div>
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/450x292/uploaded_images/5-870x565.jpg?t=1541998402"
              alt="blog-2"
              className="w-full h-full"
            />
          </div>
          <div className="w-full p-3 col-span-1  order-4">
            <strong className="text-[.9rem]">
              Quotes Wall Sticker and Decal
            </strong>
            <p className="text-[.75rem] my-2">
              Commodo laoreet semper tincidunt lorem Vestibulum nunc at In
              Curabitur magna. Euismod euismod Suspendisse tortor ante
              adipiscing risus Aenean Lorem vitae id.
            </p>
            <button className="text-[.9rem] hover:p-2 hover:bg-[#00A693] hover:text-white transition-all">
              Read More
            </button>
          </div>
          <div className="w-full p-3 col-span-1 order-6 lg:order-5">
            <strong className="text-[.9rem]">
              Quotes Wall Sticker and Decal
            </strong>
            <p className="text-[.75rem] my-2">
              Commodo laoreet semper tincidunt lorem Vestibulum nunc at In
              Curabitur magna. Euismod euismod Suspendisse tortor ante
              adipiscing risus Aenean Lorem vitae id.
            </p>
            <button className="text-[.9rem] hover:p-2 hover:bg-[#00A693] hover:text-white transition-all">
              Read More
            </button>
          </div>
          <div className="w-full h-full relative hover:opacity-[.75] transition order-5 lg:order-6">
            <div className="absolute left-5 p-2 bg-[#111111] flex text-center text-white">
              <strong>
                30 <br /> OCT
              </strong>
            </div>
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/450x292/uploaded_images/7-870x565.jpg?t=1541998070"
              alt="blog-3"
              className="w-full h-full"
            />
          </div>
          <div className="w-full p-3 col-span-1 order-8 lg:order-7">
            <strong className="text-[.9rem]">
              Quotes Wall Sticker and Decal
            </strong>
            <p className="text-[.75rem] my-2">
              Commodo laoreet semper tincidunt lorem Vestibulum nunc at In
              Curabitur magna. Euismod euismod Suspendisse tortor ante
              adipiscing risus Aenean Lorem vitae id.
            </p>
            <button className="text-[.9rem] hover:p-2 hover:bg-[#00A693] hover:text-white transition-all">
              Read More
            </button>
          </div>
          <div className="w-full h-full relative hover:opacity-[.75] transition order-7 lg:order-8">
            <div className="absolute left-5 p-2 bg-[#111111] flex text-center text-white">
              <strong>
                30 <br /> OCT
              </strong>
            </div>
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/450x292/uploaded_images/4-870x565.jpg?t=1541998456"
              alt="blog-4"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
