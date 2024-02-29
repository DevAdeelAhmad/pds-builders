import React from "react";
import Form from "./Form";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const ContactUsForm = () => {
  return (
    <section className="flex flex-col md:flex-row md:flex-1 gap-x-20 lg:gap-x-32 items-center gap-y-6 justify-evenly  px-3 md:px-10">
      <div className="flex flex-col gap-y-32 text-center md:flex-[0.5] items-center justify-start text-3xl md:text-4xl lg:text-7xl font-extrabold">
        <div className="flex flex-col justify-center items-center rounded-xl py-7 px-16 text-center gap-y-5 bg-slate-100 shadow-lg">
          <IoIosCall />
          <span className="text-3xl ">Call us today!</span>
          <span className="text-sm">000-000-000</span>
        </div>
        <div className="flex flex-col justify-center items-center rounded-xl py-7 px-16 text-center gap-y-5 bg-slate-100 shadow-lg">
          <IoMdMail />
          <span className="text-3xl ">Need to mail?</span>
          <span className="text-sm">example@gmail.com</span>
        </div>
      </div>
      <div className=" w-full md:flex-[0.5] lg:flex-[0.3]">
        <Form />
      </div>
    </section>
  );
};

export default ContactUsForm;
