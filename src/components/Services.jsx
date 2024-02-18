import React from "react";
import { FaBus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Services = () => {
  return (
    <div className="py-4 sm:mt-12 container">
      <h2 className="text-xl py-4 font-semibold text-center">Why Choose Us</h2>
      <div className="flex max-sm:flex-wrap justify-center pt-4 gap-8 text-center">
        <div className="w-2/5 flex flex-col ">
          <p className="text-slate-500  font-semibold">
            Lorem ipsum dolor sit amet consectetur{" "}
          </p>
          <div className="text-5xl self-center text-rose-500">
            <BsThreeDotsVertical />
            <FaBus />
          </div>
        </div>
        <div className="w-2/5 flex flex-col ">
          <div className="text-5xl self-center text-teal-500">
            <FaBus />
            <BsThreeDotsVertical />
          </div>
          <p className="text-slate-500 font-semibold">
            Lorem ipsum dolor sit amet consectetur{" "}
          </p>
        </div>
        <div className="w-2/5 flex flex-col  ">
          <p className="text-slate-500 font-semibold">
            Lorem ipsum dolor sit amet consectetur{" "}
          </p>
          <div className="text-5xl self-center text-rose-500">
            <BsThreeDotsVertical />
            <FaBus />
          </div>
        </div>
        <div className="w-2/5 flex flex-col ">
          <div className="text-5xl self-center text-teal-500">
            <FaBus />
            <BsThreeDotsVertical />
          </div>
          <p className="text-slate-500 font-semibold">
            Lorem ipsum dolor sit amet consectetur{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
