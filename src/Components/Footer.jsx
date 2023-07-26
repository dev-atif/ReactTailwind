import React from "react";
import { CiFacebook, CiTwitter, CiYoutube, CiInstagram } from "react-icons/ci";
import {AiOutlineArrowRight} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-color-primary-dark py-10  px-5">
        
      <div className="max-w-4xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-14 pb-7">
          <div>
            <div>
              <h2 className="text-xl font-bold ">About App</h2>
              <p className="text-sm leading-relaxed py-4">
                This Should Be Used To Tell A Story And Include Any Testimonials
                You Might Have About Your Product Or Service For Your Clients
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span>Follow us On</span>
              <span className="text-4xl text-color-secondary  flex items-center gap-2 transition-all">
                <CiFacebook className="hover:scale-110" />
                <CiTwitter className="hover:scale-110" />
                <CiYoutube className="hover:scale-110" />
                <CiInstagram className="hover:scale-110" />
              </span>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold ">News Letter</h2>
            <p className="text-sm leading-relaxed py-4">
              Subscribe With Email And Loads Of News Will Be Sent To You
            </p>
            <div class="flex items-center">
              <input
                type="text"
                class="w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none"
                placeholder="Enter Your Email"
              />

              <button
                type="submit"
                class="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
              >
              <AiOutlineArrowRight className="text-2xl"/>
              </button>
            </div>
          </div>
        </div>
            <div className=" text-center  pt-10 border-t border-color-gray">
                
                <p>2023 &copy; <span className="text-color-secondary">Code</span>Crafter. All Rights Reserved.</p>
                
            </div>
      </div>
    </div>
  );
};

export default Footer;
