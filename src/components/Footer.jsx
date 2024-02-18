import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-t-3xl mt-10">
      <div className=" container py-6">
        <h2 className="text-center text-4xl font-semibold py-6">Contact Us</h2>
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:justify-between p-4">
          <div className="flex flex-col gap-2 items-center sm:w-1/3">
            <div className="text-4xl">
              <FaLocationDot />
            </div>
            <p className="">
              #123, 3rd Main Street, Newtown, Post, Newtown, Kolkata, West
              Bengal 700107
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center sm:w-1/3">
            <div className="text-4xl">
              <MdEmail />
            </div>
            <p>info@email.com</p>
            <p>hr@email.com</p>
          </div>
          <div className="flex flex-col gap-2 items-center sm:w-1/3">
            <div className="text-4xl">
              <IoMdCall />
            </div>
            <p>+91123456789 - Sales & Services</p>
            <p>+91123456789 - Hiring Queries</p>
            <p>+91123456789 - Whatsapp</p>
          </div>
        </div>
        <hr />
        2024 Satya, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
