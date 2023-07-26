import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
//Link Is from react scroll it scroll component in a single page site or you can scrol to any component or element
const Menu = [
  {
    name: "Home",
    id: 1,
    Lname: "home",
  },
  {
    name: "Features",
    id: 2,
    Lname: "feature",
  },
  {
    name: "Working",
    id: 3,
    Lname: "work",
  },
  {
    name: "Testimonial",
    id: 4,
    Lname: "testomonial",
  },
  {
    name: "Pricing",
    id: 5,
    Lname: "pricing",
  },
  {
    name: "Contact",
    id: 6,
    Lname: "contact",
  },
  // Add more menu items as needed
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Open = () => {
    setOpen(!open);
  };
  return (
    <div className="sticky top-0 z-50 bg-color-primary">
      <nav className="   w-full border-b rounded ">
        <div className=" max-w-6xl mx-auto px-3 md:px-0  py-3 flex justify-between items-center ">
          <div className="text-color-secondary text-3xl font-bold">
            <h1>
              Code<span className="text-white">Crafter</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="font-bold flex gap-6 items-center">
              {Menu.map((item) => (
                <li
                  key={item.id}
                  className={`text-gray-300 hover:text-color-secondary transition 
                 `}
                >
                  <a href="#">
                    <Link
                      to={item.Lname}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                  </a>
                </li>
              ))}
              <li className="ml-3">
                <button className="btn">Free trial</button>
              </li>
            </ul>
          </div>
          <div onClick={Open} className="md:hidden ">
            {open ? (
              <AiOutlineClose className="text-white text-3xl" />
            ) : (
              <AiOutlineMenu className="text-white text-3xl" />
            )}
          </div>
          {open && (
            <div
              className=" transition fixed left-0 top-[58px] bg-color-primary w-full h-screen
               "
            >
              <ul className="font-bold text-center flex flex-col gap-5 mt-4 text-1xl">
                {Menu.map((item) => (
                  <li
                    key={item.id}
                    className="text-gray-300 hover:text-color-secondary transition "
                    onClick={() => setOpen(!open)}
                  >
                    <a href="#">
                      <Link
                        onClick={() => setOpen(!open)}
                        to={item.Lname}
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        {item.name}
                      </Link>
                    </a>
                  </li>
                ))}
                <li className="ml-3">
                  <button
                    className="bg-color-secondary  px-9  py-3 rounded hover:opacity-90
                 capitalize tracking-wider transition"
                  >
                    Free trial
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
