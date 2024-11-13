import React from "react";
import background from "../../src/assets/Shadow.png";
import ar from "../../src/assets/AR.png";
import frame from "../../src/assets/Frame.png";
const Platforms = () => {
  return (
    <div className="container w-full mx-auto  mt-[5.0rem] flex flex-col items-center justify-center">
      <div className="text-center px-4">
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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-[40px]  mt-10 bg-[#F9F9F9] w-full">
          <div className="width-[50%]">
            <p className="text-[47px] md:text-[45px] lg:text-[60px] font-extrabold">
              <span className="text-[#302348]">
                {" "}
                Share secured links <br /> to receive
              </span>{" "}
              <span className="text-[#3A6C9B]">
                payments <br /> from any where.
              </span>{" "}
            </p>
            <p className="text-[13px] md:text-[18px] text-[#373738]">
              Get paid easily by sharing a secure, custom payment <br /> link with
              customers across the globe.{" "}
            </p>
          </div>
          <img src={frame} alt="" width="500px"/>
        </div>
      </section>
      <section className="mt-[100px] bg-[#9CD4C3] w-full">
        <p>Automate your invoicing process</p>
      </section>
    </div>
  );
};

export default Platforms;
