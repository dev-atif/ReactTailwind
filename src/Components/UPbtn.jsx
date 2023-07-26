import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const UPbtn = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > 500);
  };

  const Scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    showButton && (
      <div className="fixed bottom-2 right-3">
        <button
          onClick={Scrollup}
          className="animate-bounce transition-all rounded-full bg-color-secondary text-white w-10 h-10 flex justify-center items-center"
        >
          <AiOutlineArrowUp />
        </button>
      </div>
    )
  );
};

export default UPbtn;
