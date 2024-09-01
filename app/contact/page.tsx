import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1
            className="text-5xl text-center mb-8 font-playfair"
            style={{ fontVariant: "small-caps" }}
          >
            Get in Touch
          </h1>

          <p className="text-center mb-8 text-2xl font-roboto-flex font-light">
            Have any questions or concerns? Email us or fill out the form below!
          </p>

          <form className="max-w-2xl mx-auto font-roboto-flex">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full p-4 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
              ></textarea>
            </div>
            <div className="text-center flex">
              <button
                type="submit"
                className="bg-vaps-blue text-white px-10 py-3 rounded-full hover:opacity-90 transition duration-300 text-2xl font-light"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start max-w-2xl mx-auto space-y-6 md:space-y-0">
          <div>
            <h2
              className="mb-2 text-3xl font-playfair font-light text-center"
              style={{ fontVariant: "small-caps" }}
            >
              Socials
            </h2>
            <div className="flex justify-center gap-2 text-3xl">
              <Link
                href="https://www.instagram.com/vanderbiltvaps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-gray-600 transition duration-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/groups/12734177/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-gray-600 transition duration-300" />
              </Link>
            </div>
          </div>
          <div>
            <h2
              className="mb-2 text-3xl font-playfair font-light text-center"
              style={{ fontVariant: "small-caps" }}
            >
              Email
            </h2>
            <p className="font-roboto-flex text-xl text-center">
              Hee.Seung.Yang@Vanderbilt.Edu
            </p>
          </div>
          <div>
            <h2
              className="mb-2 text-3xl font-playfair font-light text-center"
              style={{ fontVariant: "small-caps" }}
            >
              Location
            </h2>
            <p className="font-roboto-flex text-xl text-center">
              Nashville, TN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
