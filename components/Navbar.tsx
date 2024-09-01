import Image from "next/image";
import React from "react";
import Logo from "@/public/vapslogo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between py-4 items-center px-6">
      <Link href={"/"}>
        <Image src={Logo} alt="" height={50}></Image>
      </Link>
      <div className="uppercase font-roboto-flex flex gap-6 font-light text-lg">
        <Link
          href={"/about"}
          className="hover:text-gray-600 transition duration-300"
        >
          About
        </Link>
        <Link
          href={"/events"}
          className="hover:text-gray-600 transition duration-300"
        >
          Events
        </Link>
        <Link
          href={"/calendar"}
          className="hover:text-gray-600 transition duration-300"
        >
          Calendar
        </Link>
        <Link
          href={"/resources"}
          className="hover:text-gray-600 transition duration-300"
        >
          Resources
        </Link>
        <Link
          href={"/mentorship"}
          className="hover:text-gray-600 transition duration-300"
        >
          Mentorship Program
        </Link>
        <Link
          href={"/contact"}
          className="hover:text-gray-600 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
