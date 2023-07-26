import React, { useEffect, useState } from "react";
import user from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const users = [
  {
    name: "LARA CROFT",
    image: user,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum leo ut mauris consequat, non mattis lectus iaculis.",
  },
  {
    name: "JULIE",
    image: user2,
    review:
      "Praesent gravida lacus ut elit cursus, nec commodo libero sollicitudin. Suspendisse potenti. Nullam faucibus, ex a rutrum pellentesque, nunc neque pharetra velit, a tristique arcu nulla ut lectus.",
  },
  {
    name: "ALEXANDER",
    image: user3,
    review:
      "Sed eu nisl in risus volutpat laoreet. Integer posuere, justo a hendrerit auctor, lectus lacus commodo nunc, a placerat dolor augue in velit.",
  },
  {
    name: "EMILY",
    image: user4,
    review:
      "Fusce eu mi consectetur, viverra metus vitae, posuere turpis. Nam dignissim lobortis tincidunt. Ut aliquet ligula sed magna consequat, nec semper urna aliquet.",
  },
  {
    name: "JHON",
    image: user5,
    review:
      "Vestibulum sodales elit ac mi tincidunt, sed suscipit leo tempor. Maecenas lacinia, turpis id ultricies lacinia, ante purus volutpat ipsum, a bibendum lorem urna at turpis.",
  },
];
gsap.registerPlugin(ScrollTrigger);
const Review = () => {
  const [select, Setselect] = useState(0);
  useEffect(() => {
    gsap.fromTo(
      ".motion1",
      {
        opacity: 0, // Start with opacity 0 (completely transparent)
        
        y: 50,
      },
      {
        opacity: 1, // End with opacity 1 (fully visible)
        y: 0, // End with y = 0 (no vertical offset)
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".motion1",
          toggleActions: "restart none none none",
         
         
        },
      }
    );
  }, []);
  useEffect(() => {
    if (select !== null) {
      gsap.fromTo(
        `.review-${select}`,
        {
          opacity: 0,
          
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.inOut",
        }
      );
    }
  }, );
  return (
    <>
      <div name="testomonial" className="py-10 md:py-20 max-w-6xl mx-auto motion1 ">
        <div>
          <div className="text-center">
            <h2 className="title">User Reviews</h2>
            <h1>What Client Says about Our App After Use..</h1>
          </div>
          <div className="py-5 flex  justify-center md:gap-7 gap-2 flex-wrap ">
            {users.map((items, index) => (
              <div key={index}>
                <img
                  src={items.image}
                  alt="Users"
                  onClick={() => Setselect(index)}
                  className={`w-20 h-20 rounded-full ${
                    select === index ? "active-image  " : ""
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="">
            {select !== null && (
              <div className={`  review-${select} md:m-20 mt-20 px-2 relative`}>
                <div className="border  border-color-secondary rounded-xl flex flex-col justify-center">
                  <div className="flex justify-center absolute -top-16 md:left-[44%] left-[35%]">
                    <img
                      src={users[select].image}
                      alt={user[select].name}
                      className="rounded-full w-32 h-32 border-4 border-color-primary-light"
                    />
                  </div>
                  <div className="py-20 px-3 text-center">
                    <h2 className="text-4xl font-bold text-color-secondary pb-3">
                      {users[select].name}
                    </h2>
                    <p> " {users[select].review} "</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
