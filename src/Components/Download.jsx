import React from "react";
import download1 from "../assets/g-play-dark.png";
import download2 from "../assets/ios-store-dark.png";
const Download = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto py-10 md:py-20 px-5">
        <div className="text-center">
          <h1>Download App Now And Share Your Money</h1>
          <p className="leading-relaxed py-5 text-sm">
            Serving an impressive list of long-term money with experience and
            expertise in multiple industries.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row justify-center  md:gap-20 gap-10 py-10">
          <a href="#" className=" grid place-items-center">
            <img src={download1} className="bg-white w-48 h-20 p-3 rounded-lg transition-all  hover:scale-110"/>
          </a>
          <a href="#" className=" grid place-items-center">
            <img src={download2} className="bg-white p-3 w-48 h-20 rounded-lg transition-all hover:scale-110"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
