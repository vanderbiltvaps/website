import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const images = [
    "/chungus.jpg",
    "/chungus.jpg",
    "/chungus.jpg",
    "/chungus.jpg",
    "/chungus.jpg",
  ];

  return (
    <div>
      <div className="bg-slate-100 py-16">
        <div className="py-12 flex flex-col items-center px-20">
          <h1
            className="text-6xl mb-6 font-playfair font-light"
            style={{ fontVariant: "small-caps" }}
          >
            Vanderbilt Asian Pre-Professional Society
          </h1>

          <p className="text-center mb-8 mx-auto font-roboto-flex text-2xl font-light">
            We are Vanderbilt's Asian pre-professional student organization.
            Supporting the next generation of Asian American leaders, we strive
            for excellence.
          </p>

          <div className="text-center mb-12">
            <Link
              href="/about"
              className="bg-vaps-blue text-white px-10 py-4 rounded-full hover:opacity-90 transition duration-300 text-2xl font-light"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="flex gap-4 mx-4">
          {images.map((src, index) => (
            <div key={index} className="relative">
              <Image
                src={src}
                alt={`VAPS event ${index + 1}`}
                width={300}
                height={150}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white pb-20 pt-40">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-center mb-4 font-playfair font-light text-5xl"
            style={{ fontVariant: "small-caps" }}
          >
            We Are VAPS
          </h2>
          <p className="text-center mb-12 font-roboto-flex text-xl font-light">
            Inspiring Growth and Embracing Identity by connecting asian culture
            with professional ambitions
          </p>

          <h2
            className="text-center mb-8 mt-16 font-playfair font-light text-5xl"
            style={{ fontVariant: "small-caps" }}
          >
            Where We Go
          </h2>
          <div className="flex justify-center">
            <Image
              src="/vapscompanies.png"
              alt="Companies"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
