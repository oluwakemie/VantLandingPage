import React from "react";
import background from "../../src/assets/Shadow.png";
import ar from "../../src/assets/AR.png";
import frame from "../../src/assets/Frame.png";
import frame1 from "../../src/assets/12.png";
import frame2 from "../../src/assets/21shot.png";
import earth from "../../src/assets/earth.png";
import bitcoin from "../../src/assets/bitcoin.png";
import bit2 from "../../src/assets/bit2.png";
import Group from "../../src/assets/Group.png";

const Platforms = () => {
  return (
    <div className="container w-full mx-auto ">
      <div className=" mt-[5.0rem] flex flex-col items-center justify-center">
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
      </div>
      <section className="mt-[100px] bg-[#F6F6F6] w-full">
        <p className=" text-[26px] py-5 md:text-[36px] text-center font-medium">
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
      <section className="mt-[50px] bg-[#FFBD39] h-[70vh] w-full p-[100px] line-clamp-4 flex justify-between  relative">
        {/* <img src={Payment} alt="" /> */}
        <div className="w-[50%]">
          <p className="text-[64px] font-bold text-[#302348]">
            Multi-Account and Currency
          </p>
          <p className="text-[20px] text-gray-700">
            Manage multiple accounts, currencies and cards in <br /> one place,
            without switching platform.
          </p>
        </div>
        <div className="">
          <div className="absolute top-0 left-0">
            <img src={bitcoin} alt="" className="" width={250} />
          </div>
          <div className="absolute top-5 ">
            <img src={bit2} alt="" width={250} />
          </div>
          <div className="absolute top-5  right-[9.0rem]">
            <img src={bit2} alt="" width={250} />
          </div>
          <img
            src={earth}
            alt=""
            width="500px"
            className="absolute bottom-0 right-10"
          />
        </div>
      </section>
      <section className="flex flex-col-reverse items-center md:px-[70px] md:py-[70px] lg:mt-[100px]  md:flex-row w-full bg-[#F9F9F9]  px-[100px] py-[110px] gap-10">
        <div>
          <img src={Group} alt="" width="691px" />
        </div>
        <div>
          <p className=" text-[30px] md:text-[35px] lg:text-[50px] font-black ">
            Payment Solutions for <br />
            <span className="text-[#3B6896]">Business</span>{" "}
          </p>
          <p className="text-[17px] md:text-[20px] font-semibold">
            Our Services suit all Kinds of Business and All sizes, providing
            tailored support for;
          </p>
          <div className="mt-5 ">
            <div className="flex gap-5 items-center py-5 ">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0946 10.7929C19.6621 7.18766 20.9714 3.46159 19.1507 1.64074C17.33 -0.18011 13.6042 1.12928 9.99919 3.697C6.39422 1.12928 2.66842 -0.18011 0.847707 1.64074C-0.973007 3.46159 0.336282 7.18766 2.90382 10.7929C0.336282 14.3981 -0.973007 18.1242 0.847707 19.945C1.43413 20.5315 2.21741 20.793 3.12985 20.793C5.05472 20.793 7.55456 19.6294 10.0044 17.8888C12.4438 19.6294 14.9437 20.793 16.8737 20.793C17.7862 20.793 18.5705 20.5305 19.1559 19.945C20.9714 18.1242 19.6621 14.3981 17.0946 10.7929ZM17.9726 2.81887C18.7684 3.61471 18.2309 6.1939 16.0436 9.41059C15.3516 8.5539 14.6148 7.73435 13.8364 6.95536C13.0574 6.17796 12.2379 5.44221 11.3814 4.75118C14.5978 2.56366 17.1768 2.02199 17.9726 2.81887ZM15.0291 10.7929C14.292 11.7254 13.5004 12.6134 12.6584 13.4523C11.8195 14.2944 10.9316 15.086 9.99919 15.8231C9.06678 15.086 8.17883 14.2944 7.33999 13.4523C6.49798 12.6134 5.70637 11.7254 4.96931 10.7929C6.44807 8.9293 8.13573 7.24152 9.99919 5.76264C10.9316 6.49976 11.8195 7.29143 12.6584 8.1335C13.5004 8.9724 14.292 9.86042 15.0291 10.7929ZM2.02575 2.81887C2.25491 2.58866 2.63301 2.46991 3.13193 2.46991C4.3631 2.46991 6.3286 3.18867 8.61594 4.75118C7.76021 5.44277 6.9411 6.1785 6.16194 6.95536C5.38459 7.73443 4.6489 8.55398 3.95792 9.41059C1.77056 6.1939 1.22997 3.61471 2.02575 2.81887ZM2.02575 18.7669C1.22997 17.9711 1.77056 15.3919 3.95792 12.1752C4.64991 13.0319 5.38665 13.8514 6.16506 14.6304C6.94357 15.4072 7.76198 16.1429 8.61699 16.8346C5.40053 19.0221 2.82153 19.5638 2.02575 18.7669ZM17.9726 18.7669C17.1768 19.5638 14.5978 19.0252 11.3814 16.8377C12.2375 16.1451 13.057 15.4084 13.8364 14.6304C14.6138 13.8514 15.3495 13.0318 16.0405 12.1752C18.2278 15.3919 18.7684 17.9711 17.9726 18.7669ZM11.2491 10.7929C11.2491 11.0401 11.1758 11.2818 11.0385 11.4874C10.9011 11.6929 10.7059 11.8531 10.4775 11.9477C10.2491 12.0424 9.9978 12.0671 9.75534 12.0189C9.51288 11.9707 9.29017 11.8516 9.11536 11.6768C8.94056 11.502 8.82151 11.2792 8.77329 11.0368C8.72506 10.7943 8.74981 10.5429 8.84441 10.3145C8.93902 10.0861 9.09922 9.8909 9.30477 9.75355C9.51032 9.61619 9.75198 9.54288 9.99919 9.54288C10.3307 9.54288 10.6486 9.67458 10.883 9.909C11.1174 10.1434 11.2491 10.4614 11.2491 10.7929Z"
                  fill="#5485CD"
                />
              </svg>
              <p className="text-[15px] md:text-[19px]">
                Small startups to Large enterprises
              </p>
            </div>
            <div className="flex gap-5 items-center py-5 ">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0946 10.7929C19.6621 7.18766 20.9714 3.46159 19.1507 1.64074C17.33 -0.18011 13.6042 1.12928 9.99919 3.697C6.39422 1.12928 2.66842 -0.18011 0.847707 1.64074C-0.973007 3.46159 0.336282 7.18766 2.90382 10.7929C0.336282 14.3981 -0.973007 18.1242 0.847707 19.945C1.43413 20.5315 2.21741 20.793 3.12985 20.793C5.05472 20.793 7.55456 19.6294 10.0044 17.8888C12.4438 19.6294 14.9437 20.793 16.8737 20.793C17.7862 20.793 18.5705 20.5305 19.1559 19.945C20.9714 18.1242 19.6621 14.3981 17.0946 10.7929ZM17.9726 2.81887C18.7684 3.61471 18.2309 6.1939 16.0436 9.41059C15.3516 8.5539 14.6148 7.73435 13.8364 6.95536C13.0574 6.17796 12.2379 5.44221 11.3814 4.75118C14.5978 2.56366 17.1768 2.02199 17.9726 2.81887ZM15.0291 10.7929C14.292 11.7254 13.5004 12.6134 12.6584 13.4523C11.8195 14.2944 10.9316 15.086 9.99919 15.8231C9.06678 15.086 8.17883 14.2944 7.33999 13.4523C6.49798 12.6134 5.70637 11.7254 4.96931 10.7929C6.44807 8.9293 8.13573 7.24152 9.99919 5.76264C10.9316 6.49976 11.8195 7.29143 12.6584 8.1335C13.5004 8.9724 14.292 9.86042 15.0291 10.7929ZM2.02575 2.81887C2.25491 2.58866 2.63301 2.46991 3.13193 2.46991C4.3631 2.46991 6.3286 3.18867 8.61594 4.75118C7.76021 5.44277 6.9411 6.1785 6.16194 6.95536C5.38459 7.73443 4.6489 8.55398 3.95792 9.41059C1.77056 6.1939 1.22997 3.61471 2.02575 2.81887ZM2.02575 18.7669C1.22997 17.9711 1.77056 15.3919 3.95792 12.1752C4.64991 13.0319 5.38665 13.8514 6.16506 14.6304C6.94357 15.4072 7.76198 16.1429 8.61699 16.8346C5.40053 19.0221 2.82153 19.5638 2.02575 18.7669ZM17.9726 18.7669C17.1768 19.5638 14.5978 19.0252 11.3814 16.8377C12.2375 16.1451 13.057 15.4084 13.8364 14.6304C14.6138 13.8514 15.3495 13.0318 16.0405 12.1752C18.2278 15.3919 18.7684 17.9711 17.9726 18.7669ZM11.2491 10.7929C11.2491 11.0401 11.1758 11.2818 11.0385 11.4874C10.9011 11.6929 10.7059 11.8531 10.4775 11.9477C10.2491 12.0424 9.9978 12.0671 9.75534 12.0189C9.51288 11.9707 9.29017 11.8516 9.11536 11.6768C8.94056 11.502 8.82151 11.2792 8.77329 11.0368C8.72506 10.7943 8.74981 10.5429 8.84441 10.3145C8.93902 10.0861 9.09922 9.8909 9.30477 9.75355C9.51032 9.61619 9.75198 9.54288 9.99919 9.54288C10.3307 9.54288 10.6486 9.67458 10.883 9.909C11.1174 10.1434 11.2491 10.4614 11.2491 10.7929Z"
                  fill="#5485CD"
                />
              </svg>
              <p className="text-[15px] md:text-[19px]">
                Local Shops to Global coorporations
              </p>
            </div>
            <div className="flex gap-5 items-center py-5 ">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0946 10.7929C19.6621 7.18766 20.9714 3.46159 19.1507 1.64074C17.33 -0.18011 13.6042 1.12928 9.99919 3.697C6.39422 1.12928 2.66842 -0.18011 0.847707 1.64074C-0.973007 3.46159 0.336282 7.18766 2.90382 10.7929C0.336282 14.3981 -0.973007 18.1242 0.847707 19.945C1.43413 20.5315 2.21741 20.793 3.12985 20.793C5.05472 20.793 7.55456 19.6294 10.0044 17.8888C12.4438 19.6294 14.9437 20.793 16.8737 20.793C17.7862 20.793 18.5705 20.5305 19.1559 19.945C20.9714 18.1242 19.6621 14.3981 17.0946 10.7929ZM17.9726 2.81887C18.7684 3.61471 18.2309 6.1939 16.0436 9.41059C15.3516 8.5539 14.6148 7.73435 13.8364 6.95536C13.0574 6.17796 12.2379 5.44221 11.3814 4.75118C14.5978 2.56366 17.1768 2.02199 17.9726 2.81887ZM15.0291 10.7929C14.292 11.7254 13.5004 12.6134 12.6584 13.4523C11.8195 14.2944 10.9316 15.086 9.99919 15.8231C9.06678 15.086 8.17883 14.2944 7.33999 13.4523C6.49798 12.6134 5.70637 11.7254 4.96931 10.7929C6.44807 8.9293 8.13573 7.24152 9.99919 5.76264C10.9316 6.49976 11.8195 7.29143 12.6584 8.1335C13.5004 8.9724 14.292 9.86042 15.0291 10.7929ZM2.02575 2.81887C2.25491 2.58866 2.63301 2.46991 3.13193 2.46991C4.3631 2.46991 6.3286 3.18867 8.61594 4.75118C7.76021 5.44277 6.9411 6.1785 6.16194 6.95536C5.38459 7.73443 4.6489 8.55398 3.95792 9.41059C1.77056 6.1939 1.22997 3.61471 2.02575 2.81887ZM2.02575 18.7669C1.22997 17.9711 1.77056 15.3919 3.95792 12.1752C4.64991 13.0319 5.38665 13.8514 6.16506 14.6304C6.94357 15.4072 7.76198 16.1429 8.61699 16.8346C5.40053 19.0221 2.82153 19.5638 2.02575 18.7669ZM17.9726 18.7669C17.1768 19.5638 14.5978 19.0252 11.3814 16.8377C12.2375 16.1451 13.057 15.4084 13.8364 14.6304C14.6138 13.8514 15.3495 13.0318 16.0405 12.1752C18.2278 15.3919 18.7684 17.9711 17.9726 18.7669ZM11.2491 10.7929C11.2491 11.0401 11.1758 11.2818 11.0385 11.4874C10.9011 11.6929 10.7059 11.8531 10.4775 11.9477C10.2491 12.0424 9.9978 12.0671 9.75534 12.0189C9.51288 11.9707 9.29017 11.8516 9.11536 11.6768C8.94056 11.502 8.82151 11.2792 8.77329 11.0368C8.72506 10.7943 8.74981 10.5429 8.84441 10.3145C8.93902 10.0861 9.09922 9.8909 9.30477 9.75355C9.51032 9.61619 9.75198 9.54288 9.99919 9.54288C10.3307 9.54288 10.6486 9.67458 10.883 9.909C11.1174 10.1434 11.2491 10.4614 11.2491 10.7929Z"
                  fill="#5485CD"
                />
              </svg>
              <p className="text-[15px] md:text-[19px]">
                Online Marketplaces to brick-and-mortar stores
              </p>
            </div>
            <div className="flex gap-5 items-center py-5  ">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0946 10.7929C19.6621 7.18766 20.9714 3.46159 19.1507 1.64074C17.33 -0.18011 13.6042 1.12928 9.99919 3.697C6.39422 1.12928 2.66842 -0.18011 0.847707 1.64074C-0.973007 3.46159 0.336282 7.18766 2.90382 10.7929C0.336282 14.3981 -0.973007 18.1242 0.847707 19.945C1.43413 20.5315 2.21741 20.793 3.12985 20.793C5.05472 20.793 7.55456 19.6294 10.0044 17.8888C12.4438 19.6294 14.9437 20.793 16.8737 20.793C17.7862 20.793 18.5705 20.5305 19.1559 19.945C20.9714 18.1242 19.6621 14.3981 17.0946 10.7929ZM17.9726 2.81887C18.7684 3.61471 18.2309 6.1939 16.0436 9.41059C15.3516 8.5539 14.6148 7.73435 13.8364 6.95536C13.0574 6.17796 12.2379 5.44221 11.3814 4.75118C14.5978 2.56366 17.1768 2.02199 17.9726 2.81887ZM15.0291 10.7929C14.292 11.7254 13.5004 12.6134 12.6584 13.4523C11.8195 14.2944 10.9316 15.086 9.99919 15.8231C9.06678 15.086 8.17883 14.2944 7.33999 13.4523C6.49798 12.6134 5.70637 11.7254 4.96931 10.7929C6.44807 8.9293 8.13573 7.24152 9.99919 5.76264C10.9316 6.49976 11.8195 7.29143 12.6584 8.1335C13.5004 8.9724 14.292 9.86042 15.0291 10.7929ZM2.02575 2.81887C2.25491 2.58866 2.63301 2.46991 3.13193 2.46991C4.3631 2.46991 6.3286 3.18867 8.61594 4.75118C7.76021 5.44277 6.9411 6.1785 6.16194 6.95536C5.38459 7.73443 4.6489 8.55398 3.95792 9.41059C1.77056 6.1939 1.22997 3.61471 2.02575 2.81887ZM2.02575 18.7669C1.22997 17.9711 1.77056 15.3919 3.95792 12.1752C4.64991 13.0319 5.38665 13.8514 6.16506 14.6304C6.94357 15.4072 7.76198 16.1429 8.61699 16.8346C5.40053 19.0221 2.82153 19.5638 2.02575 18.7669ZM17.9726 18.7669C17.1768 19.5638 14.5978 19.0252 11.3814 16.8377C12.2375 16.1451 13.057 15.4084 13.8364 14.6304C14.6138 13.8514 15.3495 13.0318 16.0405 12.1752C18.2278 15.3919 18.7684 17.9711 17.9726 18.7669ZM11.2491 10.7929C11.2491 11.0401 11.1758 11.2818 11.0385 11.4874C10.9011 11.6929 10.7059 11.8531 10.4775 11.9477C10.2491 12.0424 9.9978 12.0671 9.75534 12.0189C9.51288 11.9707 9.29017 11.8516 9.11536 11.6768C8.94056 11.502 8.82151 11.2792 8.77329 11.0368C8.72506 10.7943 8.74981 10.5429 8.84441 10.3145C8.93902 10.0861 9.09922 9.8909 9.30477 9.75355C9.51032 9.61619 9.75198 9.54288 9.99919 9.54288C10.3307 9.54288 10.6486 9.67458 10.883 9.909C11.1174 10.1434 11.2491 10.4614 11.2491 10.7929Z"
                  fill="#5485CD"
                />
              </svg>
              <p className="text-[15px] md:text-[19px]">
                Service based to Product-based industries
              </p>
            </div>
          </div>
          <button className="bg-[#3B6896] px-5 py-3  rounded text-[#fff] mt-5">
            Get started
          </button>
        </div>
      </section>

      <section className="flex flex-shrink items-center justify-between mt-4">
        <div>
          <p className="text-[30px] md:text-[42px] font-bold">More Key Features</p>
        </div>
        <div>
          <svg
            width="172"
            height="76"
            viewBox="0 0 172 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 7.125C44.1065 7.125 50.0758 8.93579 55.1532 12.3284C60.2306 15.721 64.1879 20.543 66.5248 26.1846C68.8616 31.8263 69.4731 38.0343 68.2817 44.0234C67.0904 50.0126 64.1499 55.514 59.8319 59.8319C55.514 64.1499 50.0126 67.0904 44.0234 68.2817C38.0342 69.4731 31.8263 68.8616 26.1846 66.5248C20.543 64.1879 15.721 60.2306 12.3284 55.1532C8.93577 50.0759 7.12498 44.1065 7.12498 38C7.13363 29.8141 10.3893 21.9659 16.1776 16.1776C21.9659 10.3893 29.8141 7.13364 38 7.125ZM38 64.125C43.167 64.125 48.218 62.5928 52.5143 59.7221C56.8105 56.8515 60.159 52.7713 62.1363 47.9976C64.1137 43.2239 64.631 37.971 63.623 32.9033C62.615 27.8355 60.1268 23.1805 56.4732 19.5268C52.8195 15.8732 48.1645 13.385 43.0967 12.377C38.029 11.3689 32.7761 11.8863 28.0024 13.8636C23.2287 15.841 19.1485 19.1895 16.2778 23.4857C13.4072 27.782 11.875 32.833 11.875 38C11.8828 44.9264 14.6378 51.5668 19.5355 56.4645C24.4332 61.3622 31.0736 64.1171 38 64.125ZM23.75 38C23.75 38.6299 24.0002 39.234 24.4456 39.6794C24.891 40.1248 25.4951 40.375 26.125 40.375H44.1423L38.6947 45.8197C38.474 46.0403 38.299 46.3023 38.1796 46.5906C38.0601 46.8789 37.9987 47.1879 37.9987 47.5C37.9987 47.8121 38.0601 48.1211 38.1796 48.4094C38.299 48.6977 38.474 48.9597 38.6947 49.1803C38.9153 49.401 39.1773 49.576 39.4656 49.6954C39.7539 49.8149 40.0629 49.8763 40.375 49.8763C40.687 49.8763 40.9961 49.8149 41.2844 49.6954C41.5727 49.576 41.8346 49.401 42.0553 49.1803L51.5553 39.6803C51.7761 39.4597 51.9513 39.1978 52.0708 38.9095C52.1903 38.6212 52.2519 38.3121 52.2519 38C52.2519 37.6879 52.1903 37.3788 52.0708 37.0905C51.9513 36.8022 51.7761 36.5403 51.5553 36.3197L42.0553 26.8197C41.6097 26.374 41.0052 26.1237 40.375 26.1237C39.7447 26.1237 39.1403 26.374 38.6947 26.8197C38.249 27.2653 37.9987 27.8698 37.9987 28.5C37.9987 29.1302 38.249 29.7347 38.6947 30.1803L44.1423 35.625H26.125C25.4951 35.625 24.891 35.8752 24.4456 36.3206C24.0002 36.766 23.75 37.3701 23.75 38Z"
              fill="#838383"
            />
            <path
              d="M134 7.125C127.894 7.125 121.924 8.93579 116.847 12.3284C111.769 15.721 107.812 20.543 105.475 26.1846C103.138 31.8263 102.527 38.0343 103.718 44.0234C104.91 50.0126 107.85 55.514 112.168 59.8319C116.486 64.1499 121.987 67.0904 127.977 68.2817C133.966 69.4731 140.174 68.8616 145.815 66.5248C151.457 64.1879 156.279 60.2306 159.672 55.1532C163.064 50.0759 164.875 44.1065 164.875 38C164.866 29.8141 161.611 21.9659 155.822 16.1776C150.034 10.3893 142.186 7.13364 134 7.125ZM134 64.125C128.833 64.125 123.782 62.5928 119.486 59.7221C115.19 56.8515 111.841 52.7713 109.864 47.9976C107.886 43.2239 107.369 37.971 108.377 32.9033C109.385 27.8355 111.873 23.1805 115.527 19.5268C119.18 15.8732 123.836 13.385 128.903 12.377C133.971 11.3689 139.224 11.8863 143.998 13.8636C148.771 15.841 152.852 19.1895 155.722 23.4857C158.593 27.782 160.125 32.833 160.125 38C160.117 44.9264 157.362 51.5668 152.465 56.4645C147.567 61.3622 140.926 64.1171 134 64.125ZM147.555 36.3197C147.776 36.5403 147.951 36.8022 148.071 37.0905C148.19 37.3788 148.252 37.6879 148.252 38C148.252 38.3121 148.19 38.6212 148.071 38.9095C147.951 39.1978 147.776 39.4597 147.555 39.6803L138.055 49.1803C137.61 49.626 137.005 49.8763 136.375 49.8763C135.745 49.8763 135.14 49.626 134.695 49.1803C134.249 48.7347 133.999 48.1302 133.999 47.5C133.999 46.8698 134.249 46.2653 134.695 45.8197L140.142 40.375H122.125C121.495 40.375 120.891 40.1248 120.446 39.6794C120 39.234 119.75 38.6299 119.75 38C119.75 37.3701 120 36.766 120.446 36.3206C120.891 35.8752 121.495 35.625 122.125 35.625H140.142L134.695 30.1803C134.249 29.7347 133.999 29.1302 133.999 28.5C133.999 27.8698 134.249 27.2653 134.695 26.8197C135.14 26.374 135.745 26.1237 136.375 26.1237C137.005 26.1237 137.61 26.374 138.055 26.8197L147.555 36.3197Z"
              fill="black"
            />
          </svg>
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
};

export default Platforms;
