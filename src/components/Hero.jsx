import React from "react";
import HERO from "../../src/assets/hero1.png";
const Hero = () => {
  return (
    <div className="container p-4 mx-auto mt-[5.0rem]">
      <div className="flex flex-col items-center gap-5 w-full lg:flex-row lg:items-center justify-between">
        <div className="">
          <p className=" text-5xl lg:text-7xl font-bold leading-snug mb-10">
            Unlock <span className="text-[#3B6896]">Tools</span> To {" "}
            Simplify Your {" "}
            <span className="text-[#302348]">Business Finances</span>
          </p>
          <p className="text-[15px] lg:text-[20px] mb-10">
            Manage your payments, collections, and transfers <br />{" "}
            effortlessly, all from one platform.
          </p>
          <div className="flex items-center gap-8 ">
            <button className="border flex items-center gap-2 text-[#3B6896] px-7 py-3 border-radius rounded-full">
              Create an Account
            </button>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="w-full">
          <img src={HERO} alt=""  className="w-full object-cover h-[290px] md:h-[300px] lg:h-[320px] xl:h-[390px]" />
        </div>
      </div> "
    </div>
  );
};

export default Hero;
