import Link from "next/link";
import React from "react";
import { FaInstagram, FaLink, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-vaps-dark-blue text-white font-roboto-flex font-light text-lg p-10 flex justify-between">
      <div>
        <p className="uppercase mb-2">Links</p>
        <div className="flex gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/events"}>Events</Link>
          <Link href={"/calendar"}>Calender</Link>
          <Link href={"/resources"}>Resources</Link>
          <Link href={"/mentorship"}>Mentorship Program</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
      <div>
        <div className="flex gap-2 justify-end text-2xl mb-2">
          <FaInstagram />
          <FaLinkedin />
        </div>
        <p>© 2024 VAPS. All Rights Reserved.</p>
      </div>
    </div>
  );
}
