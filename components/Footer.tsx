import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-wrap px-5 md:justify-evenly items-start py-10 gap-10 bg-slate-100">
      <div className="flex flex-col justify-center gap-y-3">
        <span className="text-2xl font-semibold">Location</span>
        <span className="text-lg">City, NewZeland</span>
      </div>
      <div className="flex flex-col justify-center gap-y-3">
        <span className="text-2xl font-semibold">Contact</span>
        <div className="flex flex-col">
          <span className="text-lg">Phone:027 XXXXXX</span>
          <span className="text-lg">Email: example@gmail.com</span>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-3">
        <span className="text-2xl font-semibold">Hours</span>
        <div className="flex flex-col">
          <span>Monday - Thursday:</span>
          <span>7:30 - 3:00pm</span>
          <span>Friday:</span>
          <span>7:30 - 4:00pm</span>
          <span>Saturday - Sunday:</span>
          <span>By Appoitment</span>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-3">
        <span className="text-2xl font-semibold">Follow Us</span>
        <div className="flex justify-center items-center gap-x-4">
          <FaFacebook size={45} />
          <FaInstagram size={45} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
