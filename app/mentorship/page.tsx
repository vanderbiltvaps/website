import Image from 'next/image';

export default function MentorshipPage() {
  return (
    <div className="bg-white">
    <div className="bg-blue-50 w-full py-6 mb-8">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold text-center  font-playfair">OUR MENTORSHIP PROGRAM</h1>
      </div>

        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center">
            Our mission is to grow a global network of highly motivated student leaders who seek to impact Vanderbilt and the greater business
            community. We want to foster a tight-knit community focused on developing professional and leadership skills for success. We welcome
            students of all majors and interests to join our club in order to develop their professional skills.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <Image
          src="/mentorshippic.png"
          alt="Group of mentorship program participants"
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-center mb-4 font-playfair">ABOUT THE PROGRAM</h2>
          <p>
            Our signature program is proud to host the VAPS Spring Mentorship Program. Mentees will get matched with mentors that
            have experience in your dream field! In the 10-week session, mentees will also learn a multitude of techniques and tips on
            how to break in the industry. Keep an eye out for applications in November!
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-center mb-4 font-playfair">WHAT WE LOOK FOR</h2>
          <p>
            We look for ambitious and dedicated students wanting to break into their preferred industry. In the application, we expect
            to see how the Mentorship Program will benefit you. We also look for potential.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold  text-center mb-4 font-playfair">WHAT WILL I LEARN?</h2>
          <p>
            In the 10-week program, you will attend learning sessions every week to learn everything from refining the perfect resume,
            to sparking coffee chats with alumni. You will also be introduced to the exclusive VAPS LinkedIn Network, where you can
            connect with alumni across various industries.
          </p>
        </section>
      </div>
    </div>
  );
}