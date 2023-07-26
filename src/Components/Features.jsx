import React, { useEffect, useRef } from "react";
import { BsCalendar2Check, BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const card = [
  {
    id: 1,
    name: "Expense Trackering",
    description:
      "Easily monitor and manage your finances with our intuitive and efficient expense tracking solution.",
    icon: <BsCalendar2Check />,
  },
  {
    id: 2,
    name: "Finance Snapshot",
    description:
      " Gain a comprehensive overview of your financial health at a glance with our powerful and insightful finance snapshot tool",
    icon: <AiOutlineBarChart />,
  },
  {
    id: 3,
    name: "Support 24/24",
    description:
      "Enjoy round-the-clock assistance and support for all your inquiries and concerns regarding our services, ensuring you have the help you need, whenever you need it.",
    icon: <BsTelephoneOutbound />,
  },
];

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  
  useEffect(() => {
    gsap.fromTo(
      ".card-motion",
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
          trigger: ".card-motion",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);
  return (
    <>
      <div
        name="feature"
        className="bg-color-primary-light py-10 md:py-20 px-4 md:px-0"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center font-bold">
            <h4 className="title">Our Future</h4>
            <h1>Easy To Manage Your All Payments By Our App</h1>
          </div>
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-10 card-motion "
           
          >
            {card.map((item, index) => (
              <div
                id={item.id}
                className={`border border-solid text-center p-6 rounded-md
                 lg:hover:scale-110 transition-all shadow-white shadow-md
                  ${
                    index === card.length - 1
                      ? "md:col-span-2 lg:col-span-1"
                      : ""
                  }`}
              >
                <div className="flex justify-center mb-3 text-6xl text-color-secondary">
                  {item.icon}
                </div>
                <div>
                  <h4 className="md:text-2xl text-lg">{item.name}</h4>
                  <p className="text-sm leading-loose text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
