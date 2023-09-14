import React from "react";

import banner from "../assets/navbar-img/feedback-banner.jpg";

const Feedback = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="w-full py-7 mb-10 bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      <div className="w-[70%] flex flex-col md:flex-row justify-center items-center   text-white">
        <div>
          <img
            src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/testimonial/user1.png"
            alt="feedback"
            className="w-full h-full"
          />
        </div>

        <div className="w-full h-full p-5 bg-black">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            corporis reiciendis nihil quasi sapiente velit praesentium porro
            quis, aperiam ut culpa numquam quos mollitia delectus omnis quam.
            Quo, nulla nobis!
          </p>
          <div className="w-full flex">
            <strong>
              Neswin Pogi <span className="font-normal"> - Hacker </span>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
