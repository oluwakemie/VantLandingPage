import React from "react";
import background from "../../src/assets/Shadow.png";
import ar from "../../src/assets/AR.png";
import frame from "../../src/assets/Frame.png";
const Platforms = () => {
  return (
    <div className="container p-4 mx-auto mt-[5.0rem] flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-[46px]">
          Multiple Businesses On{" "}
          <span className="text-[#3B6896]">
            <strong> One Platform</strong>
          </span>
        </p>
        <p className="text-[#606060] text-[20px]">
          Switch between different businesses seamlessly, with consolidated
          financial insight across all.
        </p>
      </div>
      <div className="relative mt-[100px]">
        <img src={background} alt="" width="1130px" className="to" />
        <img
          src={ar}
          alt=""
          width="1160px"
          className="absolute bottom-[17px] right-[19px] z-5  "
        />
      </div>
      <section className="mt-[100px] bg-[#F6F6F6] w-full">
        <p className=" text-[26px] md:text-[36px] text-center font-medium">
          Experience Flexibility and scalable Business solution <br /> with{" "}
          <span className="text-[#3B6896]">
            <strong>Vant for Business</strong>
          </span>
        </p>
        <div className="flex items-center justify-center gap-[60px] mt-10 bg-[#F9F9F9]">
          <div>
            <p className="text-[60px] font-extrabold">
              <span className="text-[#302348]">
                {" "}
                Share secured links <br /> to receive
              </span>{" "}
              <span className="text-[#3A6C9B]">
                payments <br /> from any where.
              </span>{" "}
            </p>
            <p className="text-[18px] text-[#373738]">
              Get paid easily by sharing a secure, custom payment <br /> link with
              customers across the globe.{" "}
            </p>
          </div>
          <img src={frame} alt="" width="544px" height="522px" />
        </div>
      </section>
    </div>
  );
};

export default Platforms;
