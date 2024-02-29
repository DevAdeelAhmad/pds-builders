import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <form className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-y-12 ">
      <div className="">
        <label className="block text-sm font-medium text-black">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <div className="">
        <div className="flex gap-x-2">
          <span className="block text-sm font-medium text-black">Phone</span>
          <span className=" block text-sm font-medium text-gray-500">
            {" "}
            {"(required)"}
          </span>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <div className="">
        <div className="flex gap-x-2">
          <span className="block text-sm font-medium text-black">Email</span>
          <span className=" block text-sm font-medium text-gray-500">
            {" "}
            {"(required)"}
          </span>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <div className="">
        <label className="block text-sm font-medium text-gray-700">
          Service Inquiry
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <Button className="w-full bg-blue-700">I{"'"}m Interested</Button>
    </form>
  );
};

export default ContactForm;
