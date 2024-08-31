import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8 font-playfair">GET IN TOUCH</h1>
          
          <p className="text-center mb-8 text-lg">Have any questions or concerns? Email us!</p>
          
          <form className="max-w-2xl mx-auto">
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="mb-6">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="mb-6">
              <textarea 
                placeholder="Message" 
                rows={6}
                className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-blue-200 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-300 transition duration-300">
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start max-w-2xl mx-auto space-y-6 md:space-y-0">
          <div>
            <h2 className="font-bold mb-2 text-lg font-playfair">SOCIALS</h2>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/vanderbiltvaps/" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.png" alt="Instagram" width={32} height={32} />
              </Link>
              <Link href="https://www.linkedin.com/groups/12734177/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg font-playfair">EMAIL</h2>
            <p>Hee.Seung.Yang@Vanderbilt.Edu</p>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg font-playfair">LOCATION</h2>
            <p>Nashville, TN</p>
          </div>
        </div>
      </div>
    </div>
  );
}