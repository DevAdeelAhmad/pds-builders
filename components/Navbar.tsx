"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/public/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 py-4 px-12 flex justify-between items-center">
      <div className="flex items-center">
        <Image className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full" alt="logo" src={logo} width={80} height={80} />
      </div>
      <div className="hidden md:flex items-center space-x-10 text-lg md:text-xl lg:text-2xl font-bold">
        <Link href="#" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          About Us
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          Contact Us
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          Gallery
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          Services
        </Link>
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden" asChild>
          <RxHamburgerMenu size="30" color="#fff" />
        </SheetTrigger>
        <SheetContent side={"top"} className="z-[3000] p-0">
          <div className="bg-yellow-400 py-10">
            <div className=" flex flex-col items-end justify-end  mx-auto px-4 py-2 font-bold text-xl">
              <Link href="#" className="block text-white py-2">
                Home
              </Link>
              <Link href="#" className="block text-white py-2">
                About Us
              </Link>
              <Link href="#" className="block text-white py-2">
                Contact Us
              </Link>
              <Link href="#" className="block text-white py-2">
                Gallery
              </Link>
              <Link href="#" className="block text-white py-2">
                Services
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
