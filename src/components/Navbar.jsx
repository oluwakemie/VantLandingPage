import React, { useState } from "react";
import Logo from "../../src/assets/logo.png";
import { motion as m } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  // const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center ">
        <div>
          <img src={Logo} alt="logo" width={140} height={100} />
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li>Personal</li>
            <li>Product</li>
            <li>Company</li>
            <li>Developer</li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <button className="border flex items-center gap-2 text-[#3B6896] px-7 py-3 border-radius rounded-full ">
            <svg
              width="44"
              height="20"
              viewBox="0 0 44 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.043 6.5233C16.961 6.57464 15.009 7.65797 15.009 10.06C15.101 12.7993 17.4723 13.76 17.513 13.76C17.4723 13.8113 17.155 15.0686 16.215 16.3866C15.469 17.522 14.641 18.6666 13.3836 18.6666C12.1876 18.6666 11.7583 17.91 10.3783 17.91C8.89629 17.91 8.47696 18.6666 7.34229 18.6666C6.08496 18.6666 5.19562 17.4606 4.40896 16.336C3.38696 14.864 2.51829 12.554 2.48762 10.336C2.46696 9.16064 2.69229 8.0053 3.26429 7.02397C4.07162 5.65397 5.51296 4.72397 7.08696 4.6933C8.29296 4.65264 9.36629 5.5213 10.1023 5.5213C10.8076 5.5213 12.1263 4.6933 13.6183 4.6933C14.2623 4.69397 15.9796 4.88797 17.043 6.5233ZM10.0003 4.45864C9.78562 3.3853 10.3783 2.31197 10.9303 1.6273C11.6356 0.799305 12.7496 0.237305 13.7103 0.237305C13.7716 1.31064 13.383 2.3633 12.6883 3.12997C12.065 3.95797 10.9916 4.5813 10.0003 4.45864Z"
                fill="#3B6896"
              />
              <path
                d="M29.082 2.14062L36 9.05729L37.7852 7.27213C35.3458 5.79214 32.0787 3.80673 30.6094 2.91406L29.625 2.31771C29.451 2.21171 29.2647 2.15462 29.082 2.14062ZM28.026 2.96875C28.012 3.04475 28 3.12112 28 3.20312V16.8724C28 16.9297 28.0115 16.9831 28.0195 17.0378L35.0573 10L28.026 2.96875ZM38.9583 7.98437L36.9427 10L38.9232 11.9805C39.9725 11.3445 40.6993 10.9028 40.7799 10.8542C41.1366 10.6362 41.338 10.3072 41.332 9.94792C41.3267 9.59525 41.1252 9.27994 40.7825 9.08594C40.7059 9.04194 39.989 8.60904 38.9583 7.98437ZM36 10.9427L29.1029 17.8398C29.2369 17.8165 29.3707 17.7765 29.4987 17.6992C29.676 17.5912 34.4667 14.6847 37.75 12.6927L36 10.9427Z"
                fill="#3B6896"
              />
            </svg>
            <p className="text-sm">Download an App</p>{" "}
          </button>
        </div>
        <button onClick={handleToggle} className=" md:inline-block lg:hidden">
          {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>
      {showMenu && (
        <m.div
          initial={{ x: -30, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            // scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" mt-4 absolute top-[82px] flex space-x-3 bg-white h-screen   lg:hidden w-full py-[30px] px-[20px] z-10"
        >
          <ul className="flex flex-col space-y-9 text-2xl  mb-2 text-black md:text-4xl ">
            <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
              Personal
            </li>

            <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
              Business
            </li>

            <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
              Products
            </li>

            <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
              Company
            </li>

            <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
              Developers
            </li>

            <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
              Blogs
            </li>

            <li>
              {" "}
              {/* <div className="flex justify-center items-center gap-6 mt-[40px]">
                <a
                  href="https://www.google.com/url?q=https://play.google.com/store/apps/details%3Fid%3Dcom.vant.app%26hl%3Den_US%26referrer%3Dutm_source%253Dgoogle%2526utm_medium%253Dorganic%2526utm_term%253Dvant%2Bapp&sa=U&ved=2ahUKEwixkrSIwpqBAxVgU0EAHVPRDAMQFnoECAUQAg&usg=AOvVaw3iL8zaaBsLYYudFsvEMTLY "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./image/googleplay.png"
                    alt="google play logo"
                    className="w-[135px]
            h-[40px] lg:w-[189px]
            lg:h-[56px]"
                  />
                </a>
                <a
                  href="https://apps.apple.com/ng/app/vant-app/id6464392721"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./image/appstore.png"
                    alt="app store logo"
                    className="w-[120px]
            h-[40px] lg:w-[168px]
            lg:h-[56px]"
                  />
                </a>
              </div> */}
            </li>
          </ul>
        </m.div>
      )}
    </div>
  );
};

export default Navbar;
