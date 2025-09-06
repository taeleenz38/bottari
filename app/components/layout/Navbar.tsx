import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between px-4 py-3 text-white bg-[var(--secondary)] shadow-md">
      <Link href="/" className="">
        <Image
          src="/images/LOGO.png"
          alt="logo"
          width={80}
          height={80}
          className=""
        />
      </Link>
      <div className="flex items-center gap-10 text-3xl font-extralight">
        <Link
          href="/"
          className="hover:cursor-pointer hover:scale-103 duration-200"
        >
          Home
        </Link>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <Link
          href="/menu"
          className="hover:cursor-pointer hover:scale-103 duration-200"
        >
          Menu
        </Link>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <Link
          href="/gallery"
          className="hover:cursor-pointer hover:scale-103 duration-200"
        >
          Gallery
        </Link>
      </div>
      <div className="w-28"></div>
    </div>
  );
};

export default Navbar;
