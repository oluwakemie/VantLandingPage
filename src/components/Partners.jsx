import React from "react";
import bank from "../../src/assets/BANK.png";
import tech from "../../src/assets/TECH.png";
import Vbank from "../../src/assets/V.png";
import aws from "../../src/assets/aws.png";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <div className="container p-4 mx-auto mt-[5.0rem]">
      <div className="flex items-center justify-center ">
        <p className="text-[#AFAFAF] text-[25px] tracking-wider">
          Some of our Partners
        </p>
      </div>
      <div className="grid grid-cols-2  md:flex items-center justify-between gap-11">
        <img src={Vbank} alt="" className="w-[90px]" />
        <img src={tech} alt="" className="w-[90px]" />
        <img src={bank} alt="" className="w-[90px]" />
        <img src={aws} alt="" className="w-[60px]" />
      </div>{" "}
    </div>
  );
};

export default Partners;
