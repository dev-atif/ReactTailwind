import React from "react";
import pattern from '../assets/line.png'
const install = [
  { id:1,
    step: "Install The App",
    desc: "Seamlessly download and enjoy our innovative application with ease.",
  },
  {
    id:2,
    step: "Setup Your Profile",
    desc: " Personalize your experience by effortlessly creating and customizing your profile within a few simple steps.",
  },
  {
    id:3,
    step: "Enjoy The Features!",
    desc: "Delight in a wide array of powerful features designed to enhance your experience and provide you with maximum functionality.",
  },
];
const Installation = () => {
  return (
    <div name='work'>
      <div className="bg-color-primary-light py-10 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center pb-20">
            <h2 className="title"> How it Works</h2>
            <h1>Grow Up Your Money Saving</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 items-stretch  md:space-y-0 space-y-10 px-3">
            {install.map((item)=>(
                <div id="index" className="text-center md:w-1/3">
                <div
                  className="inline-block md:shadow-white shadow-sm md:bg-color-primary-dark bg-color-secondary px-6 py-3 rounded-xl
                        text-6xl md:hover:bg-color-secondary transition-all relative"
                >
                 {item.id}
                </div>
                
                <div>
                  <h2 className="text-md my-5">{item.step}</h2>
                  <p className="text-sm">
                   {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
