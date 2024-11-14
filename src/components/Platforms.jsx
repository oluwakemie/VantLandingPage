import React from "react";
import background from "../../src/assets/Shadow.png";
import ar from "../../src/assets/AR.png";
import frame from "../../src/assets/Frame.png";
import frame1 from "../../src/assets/12.png";
import frame2 from "../../src/assets/21shot.png";
import Payment from "../../src/assets/Payment.png";
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
              Get paid easily by sharing a secure, custom payment <br /> link
              with customers across the globe.{" "}
            </p>
          </div>
          <img src={frame} alt="" width="500px" />
        </div>
      </section>
      <section className="mt-[100px] bg-[#9CD4C3] w-full relative h-[70vh] px-5 flex items-center justify-between ">
        <div className="w-[50%]">
          <p className="text-[60px] text-[#302348] font-bold ">
            Automate your <span className="text-[#FFFFFF]">invoicing</span>{" "}
            process
          </p>
          <p className="text-[18px]">
            Save time and reduce manual errors by automating your invoicing.
            track payments, send reminders and get paid quick.
          </p>
          <div className="mt-5 flex items-center gap-5">
            <p>See more</p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2.8125C12.5895 2.8125 10.2332 3.52728 8.22899 4.86646C6.22477 6.20564 4.66267 8.10907 3.74022 10.336C2.81778 12.563 2.57643 15.0135 3.04668 17.3777C3.51694 19.7418 4.67769 21.9134 6.38214 23.6179C8.08659 25.3223 10.2582 26.4831 12.6223 26.9533C14.9865 27.4236 17.437 27.1822 19.664 26.2598C21.8909 25.3373 23.7944 23.7752 25.1335 21.771C26.4727 19.7668 27.1875 17.4105 27.1875 15C27.1841 11.7687 25.899 8.67076 23.6141 6.3859C21.3292 4.10104 18.2313 2.81591 15 2.8125ZM15 25.3125C12.9604 25.3125 10.9666 24.7077 9.27069 23.5745C7.5748 22.4414 6.25303 20.8308 5.4725 18.9464C4.69197 17.0621 4.48775 14.9886 4.88566 12.9881C5.28357 10.9877 6.26574 9.15019 7.70797 7.70796C9.1502 6.26573 10.9877 5.28356 12.9881 4.88565C14.9886 4.48774 17.0621 4.69196 18.9464 5.47249C20.8308 6.25302 22.4414 7.5748 23.5745 9.27068C24.7077 10.9666 25.3125 12.9604 25.3125 15C25.3094 17.7341 24.2219 20.3553 22.2886 22.2886C20.3553 24.2219 17.7341 25.3094 15 25.3125ZM20.3508 14.3367C20.438 14.4238 20.5071 14.5272 20.5543 14.641C20.6015 14.7548 20.6257 14.8768 20.6257 15C20.6257 15.1232 20.6015 15.2452 20.5543 15.359C20.5071 15.4728 20.438 15.5762 20.3508 15.6633L16.6008 19.4133C16.4249 19.5892 16.1863 19.688 15.9375 19.688C15.6887 19.688 15.4501 19.5892 15.2742 19.4133C15.0983 19.2374 14.9995 18.9988 14.9995 18.75C14.9995 18.5012 15.0983 18.2626 15.2742 18.0867L17.4246 15.9375H10.3125C10.0639 15.9375 9.82541 15.8387 9.64959 15.6629C9.47378 15.4871 9.375 15.2486 9.375 15C9.375 14.7514 9.47378 14.5129 9.64959 14.3371C9.82541 14.1613 10.0639 14.0625 10.3125 14.0625H17.4246L15.2742 11.9133C15.0983 11.7374 14.9995 11.4988 14.9995 11.25C14.9995 11.0012 15.0983 10.7626 15.2742 10.5867C15.4501 10.4108 15.6887 10.312 15.9375 10.312C16.1863 10.312 16.4249 10.4108 16.6008 10.5867L20.3508 14.3367Z"
                fill="#353131"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            src={frame1}
            alt=""
            width="400px"
            className="absolute z-10 bottom-0 right-9"
          />
          <img src={frame2} alt="" width="600px" className="" />
        </div>
      </section>
      <section className="mt-10">
        {/* <img src={Payment} alt="" /> */}
        <div>
          <p>Multi-Account and Currency</p>
        </div>
      </section>
    </div>
  );
};

export default Platforms;
