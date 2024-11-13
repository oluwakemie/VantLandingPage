import React from "react";
import background from "../../src/assets/Shadow.png";
import ar from "../../src/assets/AR.png";
const Platforms = () => {
  return (
    <div className="container p-4 mx-auto mt-[5.0rem] flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-[46px]">Multiple Businesses On <span className="text-[#3B6896]"><strong> One Platform</strong></span></p>
        <p className="text-[#606060] text-[20px]">
          Switch between different businesses seamlessly, with consolidated
          financial insight across all.
        </p>
      </div>
      <div className="relative mt-[100px]">
        <img src={background} alt="" width="1130px" className="to" />
        <img src={ar} alt="" width="1160px" className="absolute bottom-[17px] right-[19px] z-5  " />
        
      </div>
    </div>
  );
};

export default Platforms;
