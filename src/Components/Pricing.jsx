import React, { useEffect, useState } from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const frontSideData = [
    {
      level: "Basic",
      amount: "20",
      desc:
        "The basic price level offers a simple and affordable pricing option for essential features or services.",
      duration: "monthly",
    },
    {
      level: "Intermediate",
      amount: "40",
      desc:
        "The intermediate price level provides a balanced pricing option that offers a combination of advanced features and affordability, catering to users with moderate requirements.",
      duration: "monthly",
    },
    {
      level: "Advance",
      amount: "60",
      desc:
        "The advanced price level offers top-tier features and advanced capabilities for those with complex and high-performance needs.",
      duration: "monthly",
    },
  ];

  const backSideData = [
    {
      level: "Basic",
      amount: "120",
      desc:
        "The basic price level offers a simple and affordable pricing option for essential features or services.",
      duration: "yearly",
    },
    {
      level: "Intermediate",
      amount: "150",
      desc:
        "The intermediate price level provides a balanced pricing option that offers a combination of advanced features and affordability, catering to users with moderate requirements.",
      duration: "yearly",
    },
    {
      level: "Advance",
      amount: "500",
      desc:
        "The advanced price level offers top-tier features and advanced capabilities for those with complex and high-performance needs.",
      duration: "yearly",
    },
  ];
  
  
  useEffect(() => {
    gsap.fromTo(
      ".price-motion",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".price-motion",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);
  return (
    <div name="pricing" className="bg-color-primary-light">
      <div className="py-10 md:py-20">
        <div>
          <div className="text-center px-2 md:px-0">
            <h2 className="title"> PRICING</h2>
            <h1>Get In Reasonable Price</h1>
          </div>
          <div className="p-5 flex justify-center items-center gap-3">
            <p className="md:text-3xl text-sm">Monthly Billing</p>
            <label className="relative inline-block w-20 h-8 rounded-full">
              <input
                type="checkbox"
                className="h-0 w-0 opacity-0 peer"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`absolute top-0 bottom-0 right-0 left-0 border border-solid border-color-gray rounded-full bg-color-primary-light duration-300
                  before:content-[""] before:absolute before:w-6 before:h-6 before:top-[2.5px] before:left-1
                  before:bg-white before:rounded-full before:duration-300
                  ${
                    isChecked
                      ? "peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"
                      : ""
                  }`}
              ></span>
            </label>
            <p className="md:text-3xl text-sm">Annual Bill</p>
          </div>
          <div className=" flex flex-col md:flex-row max-w-6xl mx-auto gap-10 py-10 md:py-20 price-motion">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className=" md:w-1/3 md:px-0 px-3 bg-transparent group perspective "
              >
                <div
                  className={`relative duration-1000 preserve-3d    ${
                    isChecked ? "my-rotate-y-180" : ""
                  }`}
                >
                  {/* Front side of the card */}
                  <div className=" absolute backface-hidden border-2 border-color-secondary py-10 px-3 rounded-md ">
                    <div className="relative before:content-['$'] before:absolute before:text-sm before:top-0 md:before:left-[22%] before:left-[25%]">
                      <p className="text-6xl font-bold text-center">
                        {" "}
                        {frontSideData[index].amount}
                        <span className="text-sm font-normal tracking-widest">
                          /per month
                        </span>
                      </p>
                    </div>
                    <div className="py-4">
                      <h2 className="text-xl font-bold border-b-2 inline-block  border-color-secondary ">
                        {frontSideData[index].level}
                      </h2>
                      <p className="leading-relaxed py-5 text-sm ">
                        {frontSideData[index].desc}
                      </p>
                    </div>
                    <div>
                      <ul>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Expense Management</span>
                        </li>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Card Management</span>
                        </li>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Instant Statistics</span>
                        </li>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Bookmark Function</span>
                        </li>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Accounting System</span>
                        </li>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Get Started</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Backside of the card */}
                  <div className="backface-hidden my-rotate-y-180 border-color-secondary border-2 py-10 px-3 rounded-md">
                    <div className="relative before:content-['$'] before:absolute before:text-sm before:top-0 md:before:left-[18%] before:left-[22%]">
                      <p className="text-6xl font-bold text-center">
                        {" "}
                        {backSideData[index].amount}
                        <span className="text-sm font-normal tracking-widest">
                          /per Year
                        </span>
                      </p>
                    </div>
                    <div className="py-4">
                      <h2 className="text-xl font-bold border-b-2 inline-block  border-color-secondary ">
                        {backSideData[index].level}
                      </h2>
                      <p className="leading-relaxed text-sm py-5">
                        {backSideData[index].desc}
                      </p>
                    </div>
                    <div>
                      <ul>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Expense Management</span>
                        </li>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Card Management</span>
                        </li>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Instant Statistics</span>
                        </li>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Bookmark Function</span>
                        </li>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Accounting System</span>
                        </li>
                        <li className="flex  items-center gap-2">
                          <BsFillBookmarkStarFill className="text-color-secondary" />{" "}
                          <span>Get Started</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
