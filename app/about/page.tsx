import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from '../../components/FAQ';

{/*boo tsx */}
const BoardMember = ({ name, title, image }) => (
    <div className="text-center">
      <div className="bg-gray-200 w-full aspect-square mb-2">
        <Image
          src={image}
          alt={`${name}'s photo`}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm">{title}</p>
    </div>
  );
;

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-blue-50 pb-16">
        <div className="max-w-4xl mx-auto mb-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 font-playfair">WHO WE ARE</h1>
          
            <p className="text-center">
              Our mission is to grow a global network of highly motivated student leaders who seek to impact Vanderbilt and the greater business
              community. We want to foster a tight-knit community focused on developing professional and leadership skills for success. We welcome
              students of all majors and interests to join our club in order to develop their professional skills.
            </p>

        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <Image
                src="/vapsprofessional.png"
                alt="Professional development event"
                width={400}
                height={300}
                className="w-full h-auto shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 font-playfair text-center">PROFESSIONAL</h2>
              <p className='text-center'>
                VAPS is committed to professional development through events such as resume
                workshops, networking events, mentorship program, and more. From IB to Tech, VAPS
                prioritizes on building relevant skills, guiding members to professional success.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pl-6">
              <Image
                src="/vapscommunity.png"
                alt="VAPS community event"
                width={400}
                height={300}
                className="w-full h-auto  shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 font-playfair text-center">COMMUNITY</h2>
              <p className = 'text-center'>
                VAPS is a vibrant community dedicated to supporting and empowering Asian students
                as they navigate their academic and professional journeys. The club provides a
                collaborative environment where members can connect, share experiences, and gain
                valuable insights into various industries.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <Image
                src="/vapslearning.png"
                alt="Professional development event"
                width={400}
                height={300}
                className="w-full h-auto shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 font-playfair text-center">LEARNING MODEL</h2>
              <p className='text-center'>
              Fall: Learn & Explore;
            Spring: Dive & Challenge.</p>
            <p className='text-center'>

                Our programming line-up is specifically
                    designed to help you get a sense of
                    different industries and general idea in
                    the fall; our mentorship program helps
                you truly learn about the chosen industry
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair">MEET OUR 2024-2025 EXEC BOARD</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <BoardMember name="Chungus McFatty" title="HOD + Business | '25" image="/chungus.jpg" />
            <BoardMember name="Chungus McFatty" title="Chungus Studies | '25" image="/chungus.jpg" />
            <BoardMember name="Chungus McFatty" title="Chungus Studies | '25" image="/chungus.jpg" />
            <BoardMember name="Chungus McFatty" title="Chungus Studies | '25" image="/chungus.jpg" />
            <BoardMember name="Chungus McFatty" title="HOD + Business | '25" image="/chungus.jpg" />
            <BoardMember name="Chungus McFatty" title="Chungus Studies | '25" image="/chungus.jpg" />
            <BoardMember name="Chungus McFatty" title="Chungus Studies | '25" image="/chungus.jpg" />
            <BoardMember name="Chungus McFatty" title="Chungus Studies | '25" image="/chungus.jpg" />
          </div>
        </div>
      </div>

            {/* New FAQ section */}
            <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair">FREQUENTLY ASKED QUESTIONS</h2>
          <FAQ />
        </div>
      </div>

      {/* Still Have Questions section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">STILL HAVE QUESTIONS?</h2>
          <Link href="/contact" className="bg-blue-200 text-white px-6 py-3 rounded-full inline-block hover:bg-blue-300 transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}