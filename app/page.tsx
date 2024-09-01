import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const images = [
    '/chungus.jpg',
    '/chungus.jpg',
    '/chungus.jpg',
    '/chungus.jpg',
    '/chungus.jpg',
  ];

  return (
    <div>
      <div className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-6 font-playfair">
          VANDERBILT ASIAN PRE-PROFESSIONAL SOCIETY
        </h1>
        
        <p className="text-center mb-8 max-w-3xl mx-auto">
          We are Vanderbilt's Asian pre-professional student organization. Supporting the next generation of Asian American leaders, we
          strive for excellence.
        </p>
        
        <div className="text-center mb-12">
          <Link href="/about" className="bg-blue-200 text-white px-6 py-2 rounded-full hover:bg-blue-300 transition duration-300">
            Learn More
          </Link>
        </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9 relative">
              <Image
                src={src}
                alt={`VAPS event ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-playfair">
            WE ARE VAPS
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Inspiring Growth and Embracing Identity by connecting asian culture with professional ambitions
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 font-playfair">
            WHERE WE GO
          </h3>
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl aspect-[16/9]">
              <Image
                src="/vapscompanies.png"
                alt="Companies"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* This is for reference to the links */}
      <div className="text-center mb-12">
          <Link href="/contact" className="bg-blue-200 text-white px-6 py-2 rounded-full hover:bg-blue-300 transition duration-300">
            Contact
          </Link>
        </div>
        <div className="text-center mb-12">
          <Link href="/mentorship" className="bg-blue-200 text-white px-6 py-2 rounded-full hover:bg-blue-300 transition duration-300">
            Mentorship
          </Link>
        </div>
        <div className="text-center mb-12">
          <Link href="/about" className="bg-blue-200 text-white px-6 py-2 rounded-full hover:bg-blue-300 transition duration-300">
            About
          </Link>
        </div>
    </div>
  );
}